import { combineReducers } from "redux";
import authReducer from "./auth";
import appReducer from "./app";

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
});

export default rootReducer;