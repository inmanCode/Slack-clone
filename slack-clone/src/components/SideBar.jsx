import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SideBarOption from './SideBarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import AddIcon from '@material-ui/icons/Add';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';

const SideBar = ({ user }) => {
  const [rooms] = useCollection(db.collection('rooms'));

  return (
    <Container>
      <SideBarHeader>
        <SideBarInfo>
          <h2>{user.displayName}</h2>
          <h3>
            <FiberManualRecordIcon />
            {user.displayName}
          </h3>
        </SideBarInfo>
        <CreateIcon />
      </SideBarHeader>
      <SideBarOption Icon={InsertCommentIcon} title='Threads' />
      <SideBarOption Icon={InboxIcon} title='Mentions & Reactions' />
      <SideBarOption Icon={DraftsIcon} title='Saved items' />
      <SideBarOption Icon={BookmarkBorderIcon} title='Channel browser' />
      <SideBarOption Icon={FileCopyIcon} title='File browser' />
      <SideBarOption Icon={PeopleAltIcon} title='People & user groups' />
      <SideBarOption Icon={AppsIcon} title='Apps' />
      <hr />
      <SideBarOption Icon={AddIcon} title='Add Channel' addChannelOption />
      {rooms?.docs.map((room) => (
        <SideBarOption
          key={room.id}
          id={room.id}
          SelectChannel
          title={room.data().name}
        />
      ))}
    </Container>
  );
};

export default SideBar;
const Container = styled.div`
  background-color: var(--slack-color);
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
  color: #ffffff;
`;
const SideBarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;
  align-items: center;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 50%;
  }
`;
const SideBarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
    white-space: nowrap;
  }
  > h3 {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 13px;
    > .MuiSvgIcon-root {
      font-size: 13px;
      margin-top: 1px;
      margin-right: 2px;
      color: green;
    }
  }
`;
