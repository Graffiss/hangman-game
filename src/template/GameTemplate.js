import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Hangman from '../components/organisms/Hangman/Hangman';
import { randomWord } from '../components/organisms/Words/Words';

const Wrapper = styled.div`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
`;

const StyledResult = styled.div`
  display: flex;
  flex-direction: row;
  height: 400px;
`;

const StyledResultMissed = styled.div`
  flex: 1;
`;

const StyledAnswer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledParagraph = styled.p`
  color: #53555d;
  font-size: 24px;
  text-transform: uppercase;
`;

const StyledMissedLetters = styled.p`
  color: #5174fa;
  font-size: 64px;
  text-transform: uppercase;
`;

const StyledLettersGuessed = styled.button`
  width: 80px;
  height: 100px;
  color: white;
  background-color: #53555d;
  border-radius: 10px;
  font-size: 64px;
  text-transform: uppercase;
  font-family: 'Aller Display';
  outline: none;
  border: none;
  margin: 0 5px;

  ${({ empty }) =>
    empty &&
    css`
      background-color: #e6e6e7;
    `}
`;

const GameTemplate = () => {
  const [letterGuessed, setLetterGuessed] = useState([]);
  const [gameLost, setGameLost] = useState(false);
  const [wordToGuess, setWordToGuess] = useState(randomWord());

  const keyPressed = (e) => {
    e.preventDefault();
    const key = e.key.toLowerCase();
    setLetterGuessed([...letterGuessed, key]);
  };

  return (
    <Wrapper onKeyDown={keyPressed} tabIndex="0">
      <StyledResult>
        <Hangman />
        <StyledResultMissed>
          <StyledParagraph>You missed:</StyledParagraph>
          <StyledMissedLetters>
            {letterGuessed.map((item) => !wordToGuess.includes(item) && item)}
          </StyledMissedLetters>
        </StyledResultMissed>
      </StyledResult>
      <StyledAnswer>
        {[...wordToGuess].map((letter) =>
          letterGuessed.includes(letter) ? (
            <StyledLettersGuessed key={Math.random() * letter.length}>
              {letter}
            </StyledLettersGuessed>
          ) : (
            <StyledLettersGuessed key={Math.random() * letter.length} />
          ),
        )}
      </StyledAnswer>
    </Wrapper>
  );
};

export default GameTemplate;
