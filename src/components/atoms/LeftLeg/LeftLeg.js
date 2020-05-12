import React from 'react';
import styled from 'styled-components';
import leftLegImage from '../../../assets/images/bodyParts/left-leg.png';

const StyledImage = styled.img`
  position: absolute;
  top: 375px;
  left: 194px;
  width: 65px;
`;

const LeftLeg = () => <StyledImage src={leftLegImage} alt="neck" />;

export default LeftLeg;
