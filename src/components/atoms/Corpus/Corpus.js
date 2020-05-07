import React from 'react';
import styled from 'styled-components';
import corpusImage from '../../../assets/images/bodyParts/corpus.png';

const StyledImage = styled.img`
  position: absolute;
  top: 230px;
  left: 220px;
  width: 100px;
`;

const Corpus = () => <StyledImage src={corpusImage} alt="corpus" />;

export default Corpus;
