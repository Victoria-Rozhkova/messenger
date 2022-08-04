import { Chats } from "./Chats";
import { connect } from "react-redux";
import { getChatList } from "../../store/selectors/selectors";
import { getChatsThunk, addChatThunk, deleteChatThunk } from "../../store/actions/chats/chatsActions";
import { useEffect } from "react";
import { onValue } from "firebase/database";
import { chatsRef } from "../../services/firebase";

const ChatsContainer = ({ chatList, addChatThunk, deleteChatThunk, getChatsThunk }) => {

  useEffect(() => {
    const unsubscribe = onValue(chatsRef, (snapshot) => {
      const chats = [];
      snapshot.forEach(child => {
        chats.push(child.val());
      });
      getChatsThunk(chats);
    });
    return unsubscribe;
  }, []);

  const addChat = (chatName) => {
    addChatThunk(chatName);
  };

  return <Chats chatList={chatList} addChat={addChat} deleteChatThunk={deleteChatThunk} />;
};

const mapStateToProps = (state) => ({
  chatList: getChatList(state),
});

const ChatsConnected = connect(mapStateToProps, { getChatsThunk, deleteChatThunk, addChatThunk })(ChatsContainer);

export default ChatsConnected;
