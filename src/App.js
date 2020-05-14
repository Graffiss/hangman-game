import React, { useState, useEffect, useRef } from 'react';
import MainTemplate from './template/MainTemplate';
import GameView from './views/GameView';
import GameLostView from './views/GameLostView';
import { randomWord } from './components/organisms/Words/Words';

const App = () => {
  const onFocus = useRef(null);
  const [letterGuessed, setLetterGuessed] = useState([]);
  const [lettersMissed, setLetterMissed] = useState([]);
  const [wrongAnswer, setWrongAnswer] = useState([]);
  const [wordToGuess, setWordToGuess] = useState(randomWord());

  const keyPressed = (e) => {
    e.preventDefault();
    const charList = 'abcdefghijklmnopqrstuvwxyz';
    const key = e.key.toLowerCase();
    if (charList.indexOf(key) !== -1) {
      wordToGuess.includes(key)
        ? setLetterGuessed([...letterGuessed, key])
        : setLetterMissed([...lettersMissed, key]);
    }
  };

  useEffect(() => {
    setWrongAnswer([...wrongAnswer, lettersMissed.length - 1 + 1]);
    onFocus.current.focus();
  }, [lettersMissed]);

  const handleRestart = () => {
    setWordToGuess(randomWord());
    setLetterGuessed([]);
    setLetterMissed([]);
    setWrongAnswer([]);
  };

  const gameLost = lettersMissed.length >= 11;

  return (
    <>
      {gameLost && <GameLostView handleRestart={handleRestart} />}
      <MainTemplate>
        <div style={{ outline: 'none' }} onKeyDown={keyPressed} tabIndex="0" ref={onFocus}>
          <GameView
            letterGuessed={letterGuessed}
            lettersMissed={lettersMissed}
            wrongAnswer={wrongAnswer}
            wordToGuess={wordToGuess}
          />
        </div>
      </MainTemplate>
    </>
  );
};

export default App;
