import React, { useState, useEffect, useRef } from 'react';
import MainTemplate from './template/MainTemplate';
import GameView from './views/GameView';
import GameOverView from './views/GameOverView';
import AppContext from './context';
import { fetchData } from './components/organisms/Words/api';

const App = () => {
  const onFocus = useRef(null);
  const [letterGuessed, setLetterGuessed] = useState([]);
  const [lettersMissed, setLetterMissed] = useState([]);
  const [wrongAnswer, setWrongAnswer] = useState([]);
  const [wordToGuess, setWordToGuess] = useState('');

  useEffect(() => {
    fetchData(setWordToGuess);
  }, []);

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
    fetchData(setWordToGuess);
    setLetterGuessed([]);
    setLetterMissed([]);
    setWrongAnswer([]);
  };

  const gameLost = lettersMissed.length >= 11;

  const unique = (wordArr) => [...new Set(wordArr)];
  const gameWon =
    wordToGuess.length > 1 &&
    unique(wordToGuess.split(' ').join('')).every((e) => letterGuessed.includes(e));

  const gameOver = gameWon || gameLost;

  const context = {
    wrongAnswer,
    lettersMissed,
    letterGuessed,
    wordToGuess,
  };

  return (
    <AppContext.Provider value={context}>
      {(gameLost || gameWon) && <GameOverView handleRestart={handleRestart} gameWon={gameWon} />}
      <MainTemplate>
        <div
          style={{ outline: 'none' }}
          onKeyDown={!gameOver && keyPressed}
          tabIndex="0"
          role="textbox"
          ref={onFocus}
        >
          <GameView
            letterGuessed={letterGuessed}
            lettersMissed={lettersMissed}
            wrongAnswer={wrongAnswer}
            wordToGuess={wordToGuess}
          />
        </div>
      </MainTemplate>
    </AppContext.Provider>
  );
};

export default App;
