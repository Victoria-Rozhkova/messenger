import { connect } from "react-redux";
import '../../App.css';
import { addMessage } from "../../store/actions/messages/messagesActions";
import { Messenger } from "./Messenger";
import { getMessageList } from "../../store/selectors/selectors";

const MessengerContainer = ({ messageList, addMessage }) => {
  return <Messenger messageList={messageList} addMessage={addMessage} />;
};

const mapStateToProps = (state) => ({
  messageList: getMessageList(state),
});

const MessengerConnected = connect(mapStateToProps, { addMessage })(MessengerContainer);

export default MessengerConnected;
