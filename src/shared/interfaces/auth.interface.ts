export interface AuthResponse {
  refresh: string,
  access: string
  user_id: number
}

export interface AuthSignup {
  email: string
  username: string
  password: string
}

export interface AuthLogin{
  email: string
  password: string
}

export interface AuthRefresh{
  access: string
}

export interface AuthVerify{
  user_id: number
}