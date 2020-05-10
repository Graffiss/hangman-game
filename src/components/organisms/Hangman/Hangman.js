import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Bar from '../../atoms/Bar/Bar';
import Head from '../../atoms/Head/Head';
import Neck from '../../atoms/Neck/Neck';
import Corpus from '../../atoms/Corpus/Corpus';

const StyledHangman = styled.div`
  position: relative;
  flex: 1;
`;

const Hangman = () => {
  const [wrongAnswer, setWrongAnswer] = useState([0]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const hangman = [<Bar />, <Head />, <Neck />, <Corpus />];

  useEffect(() => {
    console.log(wrongAnswer);
  });

  return (
    <>
      <StyledHangman>{wrongAnswer.map((body) => hangman[body])}</StyledHangman>
      <button
        style={{ width: 150, height: 60 }}
        type="button"
        onClick={() => {
          setWrongAnswer([...wrongAnswer, wrongAnswer.length - 1 + 1]);
        }}
      >
        Wrong answer
      </button>
    </>
  );
};

export default Hangman;
