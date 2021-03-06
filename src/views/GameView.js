import React from 'react';
import styled from 'styled-components';
import GameTemplate from '../template/GameTemplate';

const Wrapper = styled.div`
  height: 80vh;
  width: 80vw;
  background-color: #f5f5f5;
  border-radius: 1rem;
  box-shadow: 10px 10px 22px -13px rgba(0, 0, 0, 0.75);
  position: relative;
  overflow: hidden;
`;

const StyledTriangle = styled.div`
  width: 0;
  height: 0;
  border-bottom: 40vh solid #4d71fa;
  border-left: 40vh solid transparent;
  position: absolute;
  bottom: 0px;
  right: 0px;
`;

const GameView = () => (
  <Wrapper>
    <StyledTriangle />
    <GameTemplate />
  </Wrapper>
);

export default GameView;
