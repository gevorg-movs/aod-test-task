import { AppActionCreators } from "./app/action-creators";
import { AuthActionCreators } from "./auth/action-creators";

export const allActionCreators = {
  ...AppActionCreators,
  ...AuthActionCreators,
};