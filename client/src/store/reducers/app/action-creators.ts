import { AppActionsEnum, SetIsLoadingAction } from "./types";
import { Dispatch } from "redux";

export const AppActionCreators = {
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: AppActionsEnum.SET_IS_LOADING,
    payload,
  }),
  setError: (payload: string) => async (dispatch: Dispatch) => {
    console.log("test suka blyat");
  },
};