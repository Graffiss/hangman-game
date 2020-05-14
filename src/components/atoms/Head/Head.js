import React from 'react';
import styled from 'styled-components';
import headImage from '../../../assets/images/bodyParts/head.png';

const StyledImage = styled.img`
  position: absolute;
  top: 45px;
  left: 209px;
  width: 120px;
  z-index: 1;
`;

const Head = () => <StyledImage src={headImage} alt="head" />;

export default Head;
