import { Chats } from "./Chats";
import { connect } from "react-redux";
import { getChatList } from "../../store/selectors/selectors";
import { addChat, deleteChat } from "../../store/actions/chats/chatsActions";
import { createDialog } from "../../store/actions/messages/messagesActions";

const ChatsContainer = ({ chatList, addChat, deleteChat, createDialog }) => {
  return <Chats chatList={chatList} addChat={addChat} deleteChat={deleteChat} createDialog={createDialog} />;
};

const mapStateToProps = (state) => ({
  chatList: getChatList(state),
});

const ChatsConnected = connect(mapStateToProps, { addChat, deleteChat, createDialog })(ChatsContainer);

export default ChatsConnected;
