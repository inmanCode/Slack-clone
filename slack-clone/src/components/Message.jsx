import styled from 'styled-components';

const Message = ({ message, timestamp, user, userImage, roomMessage }) => {
  console.log(roomMessage);
  return (
    <Container lastchild={roomMessage.length}>
      <img src={userImage} alt={user} />
      <MessageInfo>
        <h4>
          {user} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </Container>
  );
};

export default Message;
const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  &:nth-child(${({ lastchild }) => lastchild}) {
    margin-bottom: 88px;
  }
  > img {
    height: 40px;
    border-radius: 8px;
    width: 60px;
    object-fit: cover;
  }
  :hover {
    background-color: #d3d3d329;
  }
`;
const MessageInfo = styled.div`
  padding-left: 10px;
  > h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
  }
`;
