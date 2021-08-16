import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { db } from '../firebase';
import { useRef } from 'react';
import firebase from 'firebase';
const ChatInput = ({ channelName, channelId, user }) => {
  const inputRef = useRef(null);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelId) {
      return false;
    }
    db.collection('rooms').doc(channelId).collection('messages').add({
      message: inputRef.current.value,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    });
    inputRef.current.value = null;
  };
  return (
    <ChatInputContainer>
      {channelId && (
        <form>
          <input
            type='text'
            ref={inputRef}
            placeholder={`Message #${channelName}`}
          />
          <Button type='submit' onClick={sendMessage}></Button>
        </form>
      )}
    </ChatInputContainer>
  );
};

export default ChatInput;
const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    display: flex;
    justify-content: center;
    > input {
      position: absolute;
      bottom: 30px;
      width: 60%;
      border: 1px solid gray;
      border-radius: 3px;
      padding: 20px;
      outline: 0;
      bottom: 30px;
    }
    > Button {
      display: none;
    }
  }
`;
