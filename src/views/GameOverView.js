import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 999;
  background: rgba(31, 40, 84, 0.68);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RestartButton = styled.button`
  border: 3px dashed #ffb900;
  color: #ffb900;
  font-size: 24px;
  font-family: 'Aller Display';
  border-radius: 30px;
  padding: 20px 50px;
  background-color: transparent;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
`;

const StyledParagraph = styled.p`
  text-transform: uppercase;
  font-size: 64px;
  color: white;
`;

const GameOverView = ({ handleRestart, gameWon }) => (
  <Wrapper>
    <StyledParagraph>{gameWon ? 'Congratulations!' : 'Game Over. You lost!'}</StyledParagraph>
    <RestartButton onClick={() => handleRestart()}>New Word</RestartButton>
  </Wrapper>
);

export default GameOverView;
