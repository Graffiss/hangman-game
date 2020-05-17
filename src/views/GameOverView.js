import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
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

const GameOverView = ({ handleRestart, gameWon }) => {
  const onFocus = useRef(null);

  useEffect(() => {
    onFocus.current.focus();
  });

  const enterPressed = (e) => {
    e.key === 'Enter' && handleRestart();
  };

  return (
    <Wrapper>
      <StyledParagraph>{gameWon ? 'Congratulations!' : 'Game Over. You lost!'}</StyledParagraph>
      <RestartButton
        onClick={() => handleRestart()}
        onKeyDown={enterPressed}
        tabIndex="0"
        role="button"
        ref={onFocus}
      >
        New Word
      </RestartButton>
    </Wrapper>
  );
};

GameOverView.propTypes = {
  handleRestart: PropTypes.func.isRequired,
  gameWon: PropTypes.bool.isRequired,
};

export default GameOverView;
