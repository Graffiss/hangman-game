import React from 'react';
import styled from 'styled-components';
import rightFootImage from '../../../assets/images/bodyParts/right-foot.png';

const StyledImage = styled.img`
  position: absolute;
  top: 500px;
  left: 306px;
  width: 65px;
`;

const RightFoot = () => <StyledImage src={rightFootImage} alt="neck" />;

export default RightFoot;
