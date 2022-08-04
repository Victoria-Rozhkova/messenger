import { GET_MESSAGES } from "../actions/messages/messagesActions";

const initialState = {
  messages: [],
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return { ...state, messages: action.payload };
    default:
      return state;
  }
};
