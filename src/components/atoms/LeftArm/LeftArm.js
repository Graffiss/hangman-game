import React from 'react';
import styled from 'styled-components';
import leftArmImage from '../../../assets/images/bodyParts/left-arm.png';

const StyledImage = styled.img`
  position: absolute;
  top: 200px;
  left: 172px;
  width: 80px;
  z-index: 1;
`;

const LeftArm = () => <StyledImage src={leftArmImage} alt="neck" />;

export default LeftArm;
