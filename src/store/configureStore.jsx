import { createStore, applyMiddleware, combineReducers } from "redux";
import noteReducer from "../reducers/noteReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  note: noteReducer,
});

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export { configureStore };
