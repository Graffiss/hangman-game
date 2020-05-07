import React from 'react';
import styled from 'styled-components';
import barImage from '../../../assets/images/bar/bar.png';

const StyledImage = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 300px;
`;

const Bar = () => <StyledImage src={barImage} alt="bar" />;

export default Bar;
