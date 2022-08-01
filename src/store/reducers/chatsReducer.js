import { ADD_CHAT, DELETE_CHAT } from "../actions/chats/chatsActions";

const initialState = {
  chats: [
    { id: "1", name: "Chat 1" },
    { id: "2", name: "Chat 2" },
    { id: "3", name: "Chat 3" },
  ],
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      const newChat = { id: action.payload.id, name: action.payload.chatName };
      return { ...state, chats: [...state.chats, newChat] };
    case DELETE_CHAT:
      return {
        ...state,
        chats: state.chats.filter((chat) => chat.id !== action.payload),
      };
    default:
      return state;
  }
};
