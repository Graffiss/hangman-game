import React from 'react';
import styled from 'styled-components';
import leftArmImage from '../../../assets/images/bodyParts/left-arm.png';

const StyledImage = styled.img`
  position: absolute;
  top: 232px;
  left: 154px;
  width: 100px;
`;

const LeftArm = () => <StyledImage src={leftArmImage} alt="neck" />;

export default LeftArm;
