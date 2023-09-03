import { createStore, applyMiddleware, combineReducers } from "redux";
import noteReducer from "../reducers/noteReducer";
import thunk from "redux-thunk";
import userReducer from "../reducers/userReducer";

const rootReducer = combineReducers({
  note: noteReducer,
  user: userReducer,
});

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export { configureStore };
