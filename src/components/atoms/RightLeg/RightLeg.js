import React from 'react';
import styled from 'styled-components';
import rightLegImage from '../../../assets/images/bodyParts/right-leg.png';

const StyledImage = styled.img`
  position: absolute;
  top: 375px;
  left: 281px;
  width: 65px;
`;

const RightLeg = () => <StyledImage src={rightLegImage} alt="neck" />;

export default RightLeg;
