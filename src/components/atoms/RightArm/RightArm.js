import React from 'react';
import styled from 'styled-components';
import rightArmImage from '../../../assets/images/bodyParts/right-arm.png';

const StyledImage = styled.img`
  position: absolute;
  top: 232px;
  left: 286px;
  width: 100px;
`;

const RightArm = () => <StyledImage src={rightArmImage} alt="neck" />;

export default RightArm;
