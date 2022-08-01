import {
  ADD_MESSAGE,
  CREATE_DIALOG,
} from "../actions/messages/messagesActions";

const initialState = {
  messages: { 1: [], 2: [], 3: [] },
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_DIALOG:
      return {
        ...state,
        messages: { ...state.messages, ...action.payload },
      };
    case ADD_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.chatId]: [
            ...state.messages[action.payload.chatId],
            action.payload.message,
          ],
        },
      };
    default:
      return state;
  }
};
