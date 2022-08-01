import { legacy_createStore } from "redux";
import { chatsReducer } from "./reducers/chatsReducer";

export const store = legacy_createStore(
  chatsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
