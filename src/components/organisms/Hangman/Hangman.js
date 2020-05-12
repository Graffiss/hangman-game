import React from 'react';
import styled from 'styled-components';
import Bar from '../../atoms/Bar/Bar';
import Head from '../../atoms/Head/Head';
import Neck from '../../atoms/Neck/Neck';
import Corpus from '../../atoms/Corpus/Corpus';
import LeftArm from '../../atoms/LeftArm/LeftArm';
import RightArm from '../../atoms/RightArm/RightArm';
import LeftHand from '../../atoms/LeftHand/LeftHand';
import RightHand from '../../atoms/RightHand/RightHand';
import LeftLeg from '../../atoms/LeftLeg/LeftLeg';
import RightLeg from '../../atoms/RightLeg/RightLeg';
import LeftFoot from '../../atoms/LeftFoot/LeftFoot';
import RightFoot from '../../atoms/RightFoot/RightFoot';

const StyledHangman = styled.div`
  position: relative;
  flex: 1;
`;

const Hangman = ({ wrongAnswer }) => {
  const hangman = [
    <Bar />,
    <Head />,
    <Neck />,
    <Corpus />,
    <RightArm />,
    <LeftArm />,
    <RightHand />,
    <LeftHand />,
    <RightLeg />,
    <LeftLeg />,
    <RightFoot />,
    <LeftFoot />,
  ];
  return (
    <>
      <StyledHangman>{wrongAnswer.map((body) => hangman[body])}</StyledHangman>
    </>
  );
};

export default Hangman;
