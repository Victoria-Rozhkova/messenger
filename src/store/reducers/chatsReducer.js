import { GET_CHATS } from "../actions/chats/chatsActions";

const initialState = {
  chats: [],
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHATS:
      return { ...state, chats: action.payload };
    default:
      return state;
  }
};
