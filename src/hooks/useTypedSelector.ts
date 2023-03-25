import { useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState } from "../store/index";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
