import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { auth, provider } from '../firebase';

const Login = () => {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((err) => {
      alert(err.message);
    });
  };
  return (
    <Container>
      <LoginInner>
        <img src='./logo.png' alt='' />
        <h1>Sign In</h1>
        <p>tedTalks.slack.com</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </LoginInner>
    </Container>
  );
};

export default Login;
const Container = styled.div`
  display: grid;
  height: 100vh;
  background-color: #f8f8f8;
  place-items: center;
`;
const LoginInner = styled.div`
  padding: 100px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }
  > button {
    margin-top: 50px;
    text-transform: inherit;
    background-color: #0a8d48;
    color: #fff;
    :hover {
      background-color: #0a753b;
    }
    :active {
      background-color: #4a986e;
    }
  }
`;
