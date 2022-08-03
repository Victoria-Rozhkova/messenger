import { createDialog, deleteDialog } from "../messages/messagesActions";

export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";

export const addChat = (id, chatName) => ({
  type: ADD_CHAT,
  payload: { id, chatName },
});
export const deleteChat = (id) => ({
  type: DELETE_CHAT,
  payload: id,
});

export const addChatThunk = (text) => (dispatch) => {
  const id = Date.now().toString();
  const messages = { [id]: [] };
  dispatch(addChat(id, text));
  dispatch(createDialog(messages));
};

export const deleteChatThunk = (id) => (dispatch) => {
  dispatch(deleteChat(id));
  dispatch(deleteDialog(id));
};
