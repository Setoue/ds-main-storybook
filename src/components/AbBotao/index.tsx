import React from 'react';
import styled from 'styled-components';

const ButtonStylized = styled.button`
  background: #eb9b00;
  padding: 16px 32px;
  color: white;
  font-size: 20px;
  font-weight: 1000;
  border: 2px solid #eb9b00;
  cursor: pointer;

  &:hover {
    background: #b87900;
    border: 2px solid #b87900;
  }
`;

const AbBotao = () => {
  return <ButtonStylized> Clique Aqui</ButtonStylized>;
};

export default AbBotao;
