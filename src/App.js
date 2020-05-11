import React, { useState, useEffect } from 'react';
import MainTemplate from './template/MainTemplate';
import GameView from './views/GameView';
import GameLostView from './views/GameLostView';
import { randomWord } from './components/organisms/Words/Words';

const App = () => {
  const [gameLost, setGameLost] = useState(false);
  const [letterGuessed, setLetterGuessed] = useState([]);
  const [lettersMissed, setLetterMissed] = useState([]);
  const [wrongAnswer, setWrongAnswer] = useState([]);
  const [wordToGuess, setWordToGuess] = useState(randomWord());

  const keyPressed = (e) => {
    e.preventDefault();
    const key = e.key.toLowerCase();
    wordToGuess.includes(key)
      ? setLetterGuessed([...letterGuessed, key])
      : setLetterMissed([...lettersMissed, key]);
  };

  useEffect(() => setWrongAnswer([...wrongAnswer, lettersMissed.length - 1 + 1]), []);

  console.log(wrongAnswer);

  return (
    <div onKeyDown={keyPressed} tabIndex="0">
      <MainTemplate>
        {gameLost && <GameLostView />}
        <GameView
          letterGuessed={letterGuessed}
          lettersMissed={lettersMissed}
          wrongAnswer={wrongAnswer}
          wordToGuess={wordToGuess}
        />
      </MainTemplate>
    </div>
  );
};

export default App;
