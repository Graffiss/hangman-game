import React, { useState } from 'react';
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
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState([]);

  return (
    <StyledHangman>
      <Bar />
      <Neck />
      <Head />
      <Corpus />
    </StyledHangman>
  );
};

export default Hangman;
