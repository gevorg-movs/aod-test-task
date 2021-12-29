export interface AppState {
  isLoading: boolean;
  message: string;
  error: string;
}

export enum AppActionsEnum {
  SET_IS_LOADING = "SET_IS_LOADING",
  SET_MESSAGE = "SET_MESSAGE",
  SET_ERROR = "SET_ERROR",
}

export interface SetIsLoadingAction {
  type: AppActionsEnum.SET_IS_LOADING;
  payload: boolean;
}

export interface SetMessageAction {
  type: AppActionsEnum.SET_MESSAGE;
  payload: string;
}

export interface SetErrorAction {
  type: AppActionsEnum.SET_ERROR;
  payload: string;
}

export type AppAction = SetIsLoadingAction | SetMessageAction | SetErrorAction;