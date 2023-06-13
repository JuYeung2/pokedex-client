import { combineReducers } from "redux";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  // 다른 리듀서들 추가
});

export default rootReducer;
