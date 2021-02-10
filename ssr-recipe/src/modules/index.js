import { combineReducers } from "redux";
import users from "./users";

const rootReducer = combineReducers({ users }); // 리듀서 넣어줌
export default rootReducer;
