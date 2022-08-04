import { remove, set } from "firebase/database";
import { chatsRefById, getMessagesRefById } from "../../../services/firebase";

export const GET_CHATS = "CHATS::GET_CHATS";

export const getChats = (chats) => ({
  type: GET_CHATS,
  payload: chats,
});

export const getChatsThunk = (chats) => (dispatch) => {
  dispatch(getChats(chats));
};

export const addChatThunk = (chatName) => (dispatch) => {
  const id = Date.now().toString();
  set(chatsRefById(id), { id: id, name: chatName });
};

export const deleteChatThunk = (id) => (dispatch) => {
  set(chatsRefById(id), null); // or remove(chatsRefById(id))
  remove(getMessagesRefById(id));
};
