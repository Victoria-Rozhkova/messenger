export const CREATE_DIALOG = "MESSAGES::INIT_MESSAGES";
export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";

export const createDialog = (messages) => ({
  type: CREATE_DIALOG,
  payload: messages,
});

export const addMessage = (message, chatId) => ({
  type: ADD_MESSAGE,
  payload: { message, chatId },
});
