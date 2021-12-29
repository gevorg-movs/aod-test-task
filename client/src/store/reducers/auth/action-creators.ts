import { IUser } from "../../../models/User";
import {
  AuthActionsEnum,
  LoginPayload,
  RegisterPayload,
  SetAuthAction,
  SetErrorsAction,
  SetTokenAction,
  SetUserAction,
} from "./types";
import { Dispatch } from "redux";
import axios from "axios";
import { LOGIN_URL, REGISTER_URL, VERIFY_USER_URL } from "../../../api/routes";

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionsEnum.SET_USER,
    payload: user,
  }),
  setIsAuth: (auth: boolean): SetAuthAction => ({
    type: AuthActionsEnum.SET_AUTH,
    payload: auth,
  }),
  setToken: (token: string): SetTokenAction => ({
    type: AuthActionsEnum.SET_TOKEN,
    payload: token,
  }),
  setErrors: (payload: any): SetErrorsAction => ({
    type: AuthActionsEnum.SET_ERRORS,
    payload,
  }),

  verify: () => async (dispatch: Dispatch) => {
    axios
      .get(VERIFY_USER_URL)
      .then(({ data }) => {
        dispatch(AuthActionCreators.setUser(data.user));
        dispatch(AuthActionCreators.setIsAuth(true));
      })
      .catch(() => {
        dispatch(AuthActionCreators.setIsAuth(false));
      });
  },

  register: (payload: RegisterPayload) => async (dispatch: Dispatch) => {
    return axios
      .post(REGISTER_URL, payload)
      .then(({ data }) => {
        localStorage.setItem("token", data.token);
        dispatch(AuthActionCreators.setUser(data.user));
        dispatch(AuthActionCreators.setToken(data.token));
        dispatch(AuthActionCreators.setIsAuth(true));
        dispatch(AuthActionCreators.setErrors({}));
      })
      .catch(({ response }) => {
        dispatch(AuthActionCreators.setErrors(response.data.errors));
      });
  },
  login: (payload: LoginPayload) => async (dispatch: Dispatch) => {
    return axios
      .post(LOGIN_URL, payload)
      .then(({ data }) => {
        localStorage.setItem("token", data.token);
        dispatch(AuthActionCreators.setUser(data.user));
        dispatch(AuthActionCreators.setToken(data.token));
        dispatch(AuthActionCreators.setIsAuth(true));
        dispatch(AuthActionCreators.setErrors({}));
      })
      .catch(({ response }) => {
        dispatch(AuthActionCreators.setErrors(response.data.errors));
      });
  },

  logout: () => async (dispatch: Dispatch) => {
    localStorage.removeItem("token");
    dispatch(AuthActionCreators.setIsAuth(false));
  },
};