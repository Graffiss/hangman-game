import React from 'react';
import styled from 'styled-components';
import leftHandImage from '../../../assets/images/bodyParts/left-hand.png';

const StyledImage = styled.img`
  position: absolute;
  top: 306px;
  left: 144px;
  width: 30px;
`;

const LeftHand = () => <StyledImage src={leftHandImage} alt="neck" />;

export default LeftHand;
