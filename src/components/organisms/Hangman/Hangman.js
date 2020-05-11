import React from 'react';
import styled from 'styled-components';
import Bar from '../../atoms/Bar/Bar';
import Head from '../../atoms/Head/Head';
import Neck from '../../atoms/Neck/Neck';
import Corpus from '../../atoms/Corpus/Corpus';

const StyledHangman = styled.div`
  position: relative;
  flex: 1;
`;

const Hangman = ({ wrongAnswer }) => {
  const hangman = [<Bar />, <Head />, <Neck />, <Corpus />];
  return (
    <>
      <StyledHangman>{wrongAnswer.map((body) => hangman[body])}</StyledHangman>
    </>
  );
};

export default Hangman;
