import React from 'react';
import styled from 'styled-components';
import neckImage from '../../../assets/images/bodyParts/neck.png';

const StyledImage = styled.img`
  position: absolute;
  top: 170px;
  left: 257px;
  width: 24px;
`;

const Neck = () => <StyledImage src={neckImage} alt="neck" />;

export default Neck;
