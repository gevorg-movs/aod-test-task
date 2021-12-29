import { IUser } from "../../../models/User";
import { AuthAction, AuthActionsEnum, AuthState } from "./types";

const initialState: AuthState = {
  token: localStorage.getItem("token") || "",
  isAuth: true,
  user: {} as IUser,
  errors: {},
};

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionsEnum.SET_TOKEN:
      return { ...state, token: action.payload };
    case AuthActionsEnum.SET_AUTH:
      return { ...state, isAuth: action.payload };
    case AuthActionsEnum.SET_USER:
      return { ...state, user: action.payload };
    case AuthActionsEnum.SET_ERRORS:
      return { ...state, errors: action.payload };
    default:
      return state;
  }
};

export default authReducer