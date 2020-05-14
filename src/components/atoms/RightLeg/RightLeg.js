import React from 'react';
import styled from 'styled-components';
import rightLegImage from '../../../assets/images/bodyParts/right-leg.png';

const StyledImage = styled.img`
  position: absolute;
  top: 310px;
  left: 279px;
  width: 52px;
  z-index: 1;
`;

const RightLeg = () => <StyledImage src={rightLegImage} alt="neck" />;

export default RightLeg;
