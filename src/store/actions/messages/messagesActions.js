import { push } from "firebase/database";
import { getMessagesRefById } from "../../../services/firebase";
import { AUTHORS } from "../../../utils/constants";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const GET_MESSAGES = "MESSAGES::GET_MESSAGES";

export const getMessages = (messages) => ({
  type: GET_MESSAGES,
  payload: messages,
});

const sendMessage = (author, text) => {
  return { id: Date.now(), author: author, text: text };
};

export const getMessagesThunk = (messages) => (dispatch) => {
  dispatch(getMessages(messages));
};

export const addMessageThunk = (text, chatId) => (dispatch) => {
  let timeOut;
  const newMessage = sendMessage(AUTHORS.Me, text);
  push(getMessagesRefById(chatId), newMessage);
  if (newMessage.author !== AUTHORS.Bot) {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      const robotMessage = sendMessage(AUTHORS.Bot, "I am a Bot");
      push(getMessagesRefById(chatId), robotMessage);
    }, 1000);
  }
};
