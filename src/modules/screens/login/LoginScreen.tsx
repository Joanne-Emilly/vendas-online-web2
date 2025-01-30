import { Button } from 'antd';
import Input from '../../../shared/inputs';
import {
  BackgroundImage,
  ContainerLogin,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from '../../styles/loginScreen.styles';

const LoginScreen = () => {
  return (
    <div>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logoImage.png" />
          <TitleLogin level={2} type="secondary">
            LOGIN
          </TitleLogin>
          <Input title="USER" />
          <Input title="PASSWORD" />
          <Button type="primary" style={{ margin: '64px 0px 16px 0px' }}>
            LOGIN
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </div>
  );
};

export default LoginScreen;
