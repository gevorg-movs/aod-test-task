import { IUser } from "../../../models/User";

export interface RegisterPayload {
  email: string;
  name: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthState {
  token: string;
  isAuth: boolean;
  user: IUser;
  errors: {
    [name: string]: InputError;
  };
}

export enum AuthActionsEnum {
  SET_TOKEN = "SET_TOKEN",
  SET_AUTH = "SET_AUTH",
  SET_USER = "SET_USER",
  SET_ERRORS = "SET_ERRORS",
}

export interface SetTokenAction {
  type: AuthActionsEnum.SET_TOKEN;
  payload: string;
}

export interface SetAuthAction {
  type: AuthActionsEnum.SET_AUTH;
  payload: boolean;
}

export interface SetUserAction {
  type: AuthActionsEnum.SET_USER;
  payload: IUser;
}

export interface SetErrorsAction {
  type: AuthActionsEnum.SET_ERRORS;
  payload: {
    [name: string]: InputError;
  };
}

export interface InputError {
  msg: string;
}

export type AuthAction =
  | SetAuthAction
  | SetUserAction
  | SetErrorsAction
  | SetTokenAction;