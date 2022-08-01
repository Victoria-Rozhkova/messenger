import { combineReducers, legacy_createStore } from "redux";
import { chatsReducer } from "./reducers/chatsReducer";
import { messagesReducer } from "./reducers/messagesReducer";

export const store = legacy_createStore(
  combineReducers({ chats: chatsReducer, messages: messagesReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
