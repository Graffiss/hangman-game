import React from 'react';
import styled from 'styled-components';
import leftFootImage from '../../../assets/images/bodyParts/left-foot.png';

const StyledImage = styled.img`
  position: absolute;
  top: 500px;
  left: 169px;
  width: 65px;
`;

const LeftFoot = () => <StyledImage src={leftFootImage} alt="neck" />;

export default LeftFoot;
