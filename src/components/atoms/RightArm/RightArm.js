import React from 'react';
import styled from 'styled-components';
import rightArmImage from '../../../assets/images/bodyParts/right-arm.png';

const StyledImage = styled.img`
  position: absolute;
  top: 200px;
  left: 287px;
  width: 80px;
  z-index: 1;
`;

const RightArm = () => <StyledImage src={rightArmImage} alt="neck" />;

export default RightArm;
