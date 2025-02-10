import styled from 'styled-components';

export const ButtonStyles = styled.button`
  padding: 12px;
  max-width: 400px;
  border: none;
  border-radius: 6px;
  margin-top: 32px;
  width: 100%;
  color: #fff;
  background: #1677ff;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;
