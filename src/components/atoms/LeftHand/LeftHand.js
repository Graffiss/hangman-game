import React from 'react';
import styled from 'styled-components';
import leftHandImage from '../../../assets/images/bodyParts/left-hand.png';

const StyledImage = styled.img`
  position: absolute;
  top: 260px;
  left: 165px;
  width: 24px;
`;

const LeftHand = () => <StyledImage src={leftHandImage} alt="neck" />;

export default LeftHand;
