import React from 'react';
import styled from 'styled-components';
import rightHandImage from '../../../assets/images/bodyParts/right-hand.png';

const StyledImage = styled.img`
  position: absolute;
  top: 260px;
  left: 350px;
  width: 24px;
`;

const RightHand = () => <StyledImage src={rightHandImage} alt="neck" />;

export default RightHand;
