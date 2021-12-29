import { AppAction, AppActionsEnum, AppState } from "./types";

const initialState: AppState = {
  isLoading: false,
  message: "",
  error: "",
};

const appReducer = (state = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case AppActionsEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case AppActionsEnum.SET_MESSAGE:
      return { ...state, isLoading: false, error: action.payload };
    case AppActionsEnum.SET_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default appReducer;