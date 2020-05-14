import React from 'react';
import styled from 'styled-components';
import corpusImage from '../../../assets/images/bodyParts/corpus.png';

const StyledImage = styled.img`
  position: absolute;
  top: 195px;
  left: 230px;
  width: 80px;
  z-index: 1;
`;

const Corpus = () => <StyledImage src={corpusImage} alt="corpus" />;

export default Corpus;
