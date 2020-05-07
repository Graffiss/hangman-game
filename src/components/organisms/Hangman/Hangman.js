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

const Hangman = () => (
  <StyledHangman>
    <Bar />
    <Neck />
    <Head />
    <Corpus />
  </StyledHangman>
);

export default Hangman;
