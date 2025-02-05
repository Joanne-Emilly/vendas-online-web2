import { useState } from 'react';
import Button from '../../../shared/buttons/Button';
import Input from '../../../shared/inputs';
import {
  BackgroundImage,
  ContainerLogin,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from '../../styles/loginScreen.styles';
import Password from 'antd/es/input/Password';

const LoginScreen = () => {
  const [username, setUserName] = useState('');
  const [password, setPassoword] = useState('');

  const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassoword(event.target.value);
  };

  const handleLogin = () => {
    alert(`${username}, ${password}`);
  };
  return (
    <div>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logoImage.png" />
          <TitleLogin level={2} type="secondary">
            LOGIN
          </TitleLogin>
          <Input
            style={{ margin: '12px 0px 0x 0px' }}
            title="USER"
            onChange={handleUserName}
            value={username}
          />
          <Input
            type="password"
            onChange={handlePassword}
            value={password}
            style={{ margin: '12px 0px 0x 0px' }}
            title="PASSWORD"
          />
          <Button onClick={handleLogin}>LOGIN</Button>
        </LimitedContainer>
      </ContainerLogin>
    </div>
  );
};

export default LoginScreen;
