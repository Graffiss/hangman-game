import React from 'react';
import styled, { css } from 'styled-components';
import Hangman from '../components/organisms/Hangman/Hangman';

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
  display: inline-block;
  margin-right: 20px;
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

const GameTemplate = ({ wrongAnswer, lettersMissed, letterGuessed, wordToGuess }) => {
  return (
    <Wrapper>
      <StyledResult>
        <Hangman wrongAnswer={wrongAnswer} />
        <StyledResultMissed>
          <StyledParagraph>You missed:</StyledParagraph>
          {lettersMissed.map((item) => (
            <StyledMissedLetters>{item}</StyledMissedLetters>
          ))}
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
