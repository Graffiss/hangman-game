import React, { useState } from 'react';
import MainTemplate from './template/MainTemplate';
import GameView from './views/GameView';
import GameLostView from './views/GameLostView';

const App = () => {
  const [gameLost, setGameLost] = useState(true);

  return (
    <MainTemplate>
      {gameLost && <GameLostView />}
      <GameView />
    </MainTemplate>
  );
};

export default App;
