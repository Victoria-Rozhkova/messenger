import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddMessageForm } from "../AddMessageForm/AddMessageForm";
import { MessageList } from "../MessageList/MessageList";
import 'App.css';
import { onValue } from "firebase/database";
import { getMessageList } from "store/selectors/messages.selectors";
import { getMessagesRefById } from "services/firebase";
import { addMessageThunk, getMessagesThunk } from "store/actions/messagesActions";

export const Messenger = () => {
  const { chatId } = useParams();

  const dispatch = useDispatch();
  const messages = useSelector(getMessageList);

  const endMessage = useRef();

  useEffect(() => {
    endMessage.current?.scrollIntoView();
  }, [messages]);

  useEffect(() => {
    const unsubscribe = onValue(getMessagesRefById(chatId), (snapshot) => {
      const msgs = [];
      snapshot.forEach(child => {
        msgs.push(child.val());
      });
      dispatch(getMessagesThunk(msgs));
    });
    return unsubscribe;
  }, [chatId, dispatch]);

  const handleAddMessage = (text) => {
    dispatch(addMessageThunk(text, chatId));
  };

  return (
    <div className="App-content">
      <div className="Messages">
        <MessageList messages={messages} />
        <div ref={endMessage} />
        <AddMessageForm addMessage={handleAddMessage} />
      </div>
    </div>);
};
