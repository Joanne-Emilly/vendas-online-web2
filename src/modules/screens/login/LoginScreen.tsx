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
import axios from 'axios';

const LoginScreen = () => {
  const [email, setemail] = useState('');
  const [password, setPassoword] = useState('');

  const handleemail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setemail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassoword(event.target.value);
  };

  const handleLogin = async () => {
    await axios({
      method: 'post',
      url: 'http://localhost:8080/auth',
      data: {
        email: email,
        password: password,
      },
    })
      .then((result) => {
        alert(`Fez login ${result.data.acessToken}`);
        return result.data;
      })
      .catch(() => {
        alert(`Usuário ou senha inválidos`);
      });
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
          <Input title="USER" onChange={handleemail} value={email} />
          <Input type="password" onChange={handlePassword} value={password} title="PASSWORD" />
          <Button onClick={handleLogin}>LOGIN</Button>
        </LimitedContainer>
      </ContainerLogin>
    </div>
  );
};

export default LoginScreen;
