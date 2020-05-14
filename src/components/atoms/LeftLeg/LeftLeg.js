import React from 'react';
import styled from 'styled-components';
import leftLegImage from '../../../assets/images/bodyParts/left-leg.png';

const StyledImage = styled.img`
  position: absolute;
  top: 310px;
  left: 209px;
  width: 52px;
  z-index: 1;
`;

const LeftLeg = () => <StyledImage src={leftLegImage} alt="neck" />;

export default LeftLeg;
