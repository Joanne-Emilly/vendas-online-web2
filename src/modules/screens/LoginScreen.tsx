import { BackgroundImage, ContainerLogin, LimitedContainer, LogoImage } from '../styles/loginScreen.styles';

const LoginScreen = () => {
  return (
    <div>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logoImage.png" />
        </LimitedContainer>
      </ContainerLogin>
    </div>
  );
};

export default LoginScreen;
