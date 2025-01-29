import styled from 'styled-components';

export const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

export const LogoImage = styled.img`
  max-width: 300px;
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
  padding: 22px;
`;

export const LimitedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 498px;
`;
