import styled from 'styled-components';
import { db } from '../firebase';
import { useDispatch } from 'react-redux';
import { enterRoom } from '../features/appSlice';
const SideBarOption = ({
  Icon,
  title,
  addChannelOption,
  SelectChannel,
  id,
}) => {
  const dispatch = useDispatch();
  const AddChannel = () => {
    const channelName = prompt('Please enter your channel name');
    if (channelName) {
      db.collection('rooms').add({
        name: channelName,
      });
    }
  };
  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };
  return (
    <Container
      onClick={
        addChannelOption ? AddChannel : SelectChannel ? selectChannel : null
      }
    >
      {Icon && <Icon fontSize='small' style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SideBarOptionChannel>
          <span>#</span> {title}
        </SideBarOptionChannel>
      )}
    </Container>
  );
};

export default SideBarOption;
const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  padding-left: 2px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }
  > h3 {
    font-weight: 300;
    > span {
      padding: 15px;
    }
  }
`;
const SideBarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`;
