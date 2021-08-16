import styled from 'styled-components';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Chat from '../components/Chat';
const Home = ({ user }) => {
  return (
    <HomeContainer>
      <Header user={user} />
      <SideBar user={user} />
      <Chat user={user} />
    </HomeContainer>
  );
};

export default Home;
const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
`;
