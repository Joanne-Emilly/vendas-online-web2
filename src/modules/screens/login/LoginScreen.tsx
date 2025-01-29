import Input from '../../../shared/inputs';
import {
  BackgroundImage,
  ContainerLogin,
  LimitedContainer,
  LogoImage,
} from '../../styles/loginScreen.styles';

const LoginScreen = () => {
  return (
    <div>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logoImage.png" />
          <Input title="USUÁRIO" />
          <Input title="SENHA" />
        </LimitedContainer>
      </ContainerLogin>
    </div>
  );
};

export default LoginScreen;
