import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 999;
  background: rgba(94, 94, 94, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RestartButton = styled.button`
  border: 5px dashed #f9b505;
  color: #f9b505;
  font-size: 24px;
  border-radius: 20px;
  padding: 20px 50px;
  background-color: transparent;
  cursor: pointer;
  text-transform: uppercase;
`;

const StyledParagraph = styled.p`
  text-transform: uppercase;
  font-size: 64px;
  color: white;
`;

const GameLostView = () => (
  <Wrapper>
    <StyledParagraph>Game Over</StyledParagraph>
    <RestartButton>New Word</RestartButton>
  </Wrapper>
);

export default GameLostView;
