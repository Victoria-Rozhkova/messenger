import { connect } from "react-redux";
import '../../App.css';
import { addMessageThunk, getMessagesThunk } from "../../store/actions/messages/messagesActions";
import { Messenger } from "./Messenger";
import { getMessageList } from "../../store/selectors/selectors";
import { useEffect } from "react";
import { onValue } from "firebase/database";
import { getMessagesRefById } from "../../services/firebase";
import { useParams } from "react-router-dom";

const MessengerContainer = ({ messages, addMessageThunk, getMessagesThunk }) => {

  const { chatId } = useParams();

  useEffect(() => {
    const unsubscribe = onValue(getMessagesRefById(chatId), (snapshot) => {
      const msgs = [];
      snapshot.forEach(child => {
        msgs.push(child.val());
      });
      getMessagesThunk(msgs);
    });
    return unsubscribe;
  }, [chatId]);

  const handleAddMessage = (text) => {
    addMessageThunk(text, chatId);
  };

  return <Messenger messages={messages} addMessage={handleAddMessage} />;
};

const mapStateToProps = (state) => ({
  messages: getMessageList(state),
});

const MessengerConnected = connect(mapStateToProps, { addMessageThunk, getMessagesThunk })(MessengerContainer);

export default MessengerConnected;
