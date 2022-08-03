import { AUTHORS } from "../../../utils/constants";

export const CREATE_DIALOG = "MESSAGES::CREATE_DIALOG";
export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const DELETE_DIALOG = "MESSAGES::DELETE_DIALOG";

export const createDialog = (messages) => ({
  type: CREATE_DIALOG,
  payload: messages,
});

export const addMessage = (message, chatId) => ({
  type: ADD_MESSAGE,
  payload: { message, chatId },
});

export const deleteDialog = (chatId) => ({
  type: DELETE_DIALOG,
  payload: chatId,
});

const sendMessage = (author, text) => {
  return { id: Date.now(), author: author, text: text };
};

export const addMessageThunk = (text, chatId) => (dispatch) => {
  let timeOut;
  const newMessage = sendMessage(AUTHORS.Me, text);
  dispatch(addMessage(newMessage, chatId));
  if (newMessage.author !== AUTHORS.Bot) {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      const robotMessage = sendMessage(AUTHORS.Bot, "I am a Bot");
      dispatch(addMessage(robotMessage, chatId));
    }, 1000);
  }
};
