import { createSlice, createAsyncThunk, PayloadAction, AnyAction } from "@reduxjs/toolkit";
import { AuthService } from "../../services/Auth.service";
import { UserService } from "../../services/User.service";
import {
  AuthResponse,
  AuthSignup,
  AuthVerify,
  AuthLogin,
} from "../../shared/interfaces/auth.interface";
import { IUser } from "../../shared/interfaces/user.interface";



interface MyKnownError {
	message: string
	// ...
  }

export const loginThunk = createAsyncThunk<AuthResponse, AuthLogin, {rejectValue: MyKnownError}>(
  "auth/loginThunk",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await AuthService.login({
        email,
        password,
      });

      return response.data as AuthResponse;
    } catch (err: any) {
		return rejectWithValue({message: err.message});
    }
  }
);

export const signupThunk = createAsyncThunk<AuthResponse, AuthSignup, {rejectValue: MyKnownError}>(
  "auth/signupThunk",
  async ({ email, username, password }, { rejectWithValue }) => {
    try {
      const response = await AuthService.signup({
        email,
        password,
        username,
      });

      return response.data as AuthResponse;
    } catch (err: any) {
      return rejectWithValue({message: err.message});
    }
  }
);

export const verifyThunk = createAsyncThunk<AuthVerify, void, {rejectValue: MyKnownError}>(
  "auth/verifyThunk",
  async (_, { rejectWithValue }) => {
    try {
      const access = localStorage.getItem("access");

      if (!access) throw new Error("Отсутствует access токен");

      const response = await AuthService.verify(access);
      return response.data as AuthVerify;
    } catch (err: any) {
		return rejectWithValue({message: err.message});
    }
  }
);

export const getUserThunk = createAsyncThunk<IUser, { id: number }, {rejectValue: MyKnownError}>(
  "auth/getUserThunk",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await UserService.getUser(id);

      return response.data as IUser;
    } catch (err: any) {
		return rejectWithValue({message: err.message});
    }
  }
);

export const logoutThunk = createAsyncThunk<void, void, {rejectValue: MyKnownError}>(
  "auth/logoutThunk",
  async function (_, { rejectWithValue }) {
    try {
      const refresh = localStorage.getItem("refresh");

      if (!refresh) throw new Error("Отсутствует refresh токен");

      const response = await AuthService.logout(refresh);

      if (response?.data?.status) {
        localStorage.removeItem("refresh");
        localStorage.removeItem("access");
      }
    } catch (err: any) {
		return rejectWithValue({message: err.message});
    }
  }
);

function isPendingAction(action: AnyAction) {
  return action.type.endsWith("pending");
}


type userState = {
	user: IUser | null,
  	error: string | null,
  	pending: boolean,
  	isAuth: boolean,
	prefix: string
}

const initialState: userState = {
  user: null,
  error: null,
  pending: false,
  isAuth: false,
  prefix: ''
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(signupThunk.fulfilled, (state, { payload }) => {
    	state.pending = false
    	state.error = null
    })
    builder.addCase(signupThunk.rejected, (state, { payload }: PayloadAction<any>) => {
    	state.error = payload.message
    	state.pending = false
    	state.user = null
    })

    builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
    	state.pending = false
    	state.error = null
    })
    builder.addCase(loginThunk.rejected, (state,  {payload}: PayloadAction<any>) => {
    	state.error = payload.message
    	state.pending = false
    	state.user = null
    })
    builder.addCase(logoutThunk.fulfilled, (state, { payload }) => {
    	state.pending = false
    	state.user = null
    	state.error = null
    })
    builder.addCase(logoutThunk.rejected, (state, {payload}: PayloadAction<any>) => {
    	state.error = payload.message
    	state.pending = false
		
    })
    builder.addCase(getUserThunk.fulfilled, (state, { payload }: PayloadAction<IUser>) => {
    	state.user = payload
    	state.isAuth = true
    	state.pending = false
    	state.error = null
    })
    builder.addCase(getUserThunk.rejected, (state, { payload }: PayloadAction<any>) => {
    	state.error = payload.message
    	state.pending = false
    })

    builder.addMatcher(isPendingAction, (state) => {
      state.pending = true;
    });
  },
});

export const {} = AuthSlice.actions;

export default AuthSlice.reducer;
