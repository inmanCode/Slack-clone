import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice';
import ChatInput from './ChatInput';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import Message from './Message';

const Chat = ({ user }) => {
  const chatRef = useRef(null);
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection('rooms').doc(roomId)
  );
  const [roomMessage, loading] = useCollection(
    roomId &&
      db
        .collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
  );
  useEffect(() => {
    chatRef?.current.scrollIntoView({
      behavior: 'smooth',
    });
  }, [roomId, loading, roomMessage]);
  return (
    <ChatContainer>
      <>
        {roomId && (
          <Header>
            <HeaderLeft>
              <h4>
                <strong>#{roomDetails?.data().name}</strong>
              </h4>
              <StarBorderOutlinedIcon />
            </HeaderLeft>
            <HeaderRight>
              <p>
                <InfoOutlinedIcon /> Details
              </p>
            </HeaderRight>
          </Header>
        )}
        <ChatMessages>
          {roomMessage?.docs.map((doc) => {
            const { message, timestamp, user, userImage } = doc.data();
            return (
              <Message
                user={user}
                roomMessage={roomMessage.docs}
                key={doc.id}
                message={message}
                timestamp={timestamp}
                userImage={userImage}
              />
            );
          })}
          <Chatbottom ref={chatRef} />
        </ChatMessages>
        <ChatInput
          channelName={roomDetails?.data().name}
          channelId={roomId}
          user={user}
        />
      </>
    </ChatContainer>
  );
};

export default Chat;
const ChatContainer = styled.div`
  flex: 0, 7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > h4 {
    display: flex;
    text-transform: capitalize;
  }
  > .MuiSvgIcon-root {
    margin-left: 20px;
    font-size: 18px;
  }
`;
const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
    > .MuiSvgIcon-root {
      margin-right: 5px !important;
      font-size: 16px;
    }
  }
`;
const ChatMessages = styled.div``;
const Chatbottom = styled.div``;
