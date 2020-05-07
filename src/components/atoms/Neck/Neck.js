import React from 'react';
import styled from 'styled-components';
import neckImage from '../../../assets/images/bodyParts/neck.png';

const StyledImage = styled.img`
  position: absolute;
  top: 200px;
  left: 255px;
  width: 30px;
`;

const Neck = () => <StyledImage src={neckImage} alt="neck" />;

export default Neck;
