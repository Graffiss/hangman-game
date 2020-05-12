import React from 'react';
import styled from 'styled-components';
import rightHandImage from '../../../assets/images/bodyParts/right-hand.png';

const StyledImage = styled.img`
  position: absolute;
  top: 306px;
  left: 364px;
  width: 30px;
`;

const RightHand = () => <StyledImage src={rightHandImage} alt="neck" />;

export default RightHand;
