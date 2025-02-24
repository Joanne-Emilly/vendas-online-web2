import { Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;
export const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

export const TitleLogin = styled(Title)`
  color: #006397;
`;

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  background-color: #9ed4f1;
  width: 100%;
  height: 100vh;
  max-width: 646px;
  padding: 0px 22px;
`;

export const LimitedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 498px;
`;
