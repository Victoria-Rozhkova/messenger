import { connect } from "react-redux";
import '../../App.css';
import { addMessageThunk } from "../../store/actions/messages/messagesActions";
import { Messenger } from "./Messenger";
import { getMessageList } from "../../store/selectors/selectors";

const MessengerContainer = ({ messageList, addMessageThunk }) => {
  return <Messenger messageList={messageList} addMessageThunk={addMessageThunk} />;
};

const mapStateToProps = (state) => ({
  messageList: getMessageList(state),
});

const MessengerConnected = connect(mapStateToProps, { addMessageThunk })(MessengerContainer);

export default MessengerConnected;
