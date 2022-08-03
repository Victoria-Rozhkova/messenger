import { Chats } from "./Chats";
import { connect } from "react-redux";
import { getChatList } from "../../store/selectors/selectors";
import { addChatThunk, deleteChatThunk } from "../../store/actions/chats/chatsActions";
import { createDialog } from "../../store/actions/messages/messagesActions";

const ChatsContainer = ({ chatList, addChatThunk, deleteChatThunk, createDialog }) => {
  return <Chats chatList={chatList} addChatThunk={addChatThunk} deleteChatThunk={deleteChatThunk} createDialog={createDialog} />;
};

const mapStateToProps = (state) => ({
  chatList: getChatList(state),
});

const ChatsConnected = connect(mapStateToProps, { addChatThunk, deleteChatThunk, createDialog })(ChatsContainer);

export default ChatsConnected;
