import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import Hangman from '../components/organisms/Hangman/Hangman';
import AppContext from '../context';

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
  position: relative;
`;

const StyledParagraph = styled.p`
  color: #53555d;
  font-size: 24px;
  text-transform: uppercase;
  ${({ centered }) =>
    centered &&
    css`
      text-align: center;
    `}
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

const GameTemplate = () => {
  const { wrongAnswer, wordToGuess, letterGuessed, lettersMissed } = useContext(AppContext);

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
      <StyledParagraph centered>Country in Europe:</StyledParagraph>
      <StyledAnswer>
        {[...wordToGuess].map((letter, index) =>
          letter === ' ' ? (
            <StyledLettersGuessed empty key={index} />
          ) : letterGuessed.includes(letter) ? (
            <StyledLettersGuessed key={index}>{letter}</StyledLettersGuessed>
          ) : (
            <StyledLettersGuessed key={index} />
          ),
        )}
      </StyledAnswer>
    </Wrapper>
  );
};

export default GameTemplate;
