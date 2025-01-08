import React from 'react';
import styled from 'styled-components';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import RoleDice from './RoleDice';
import { useState } from 'react';
import { Button, OutlineButton } from '../Styled/Button';
import Rules from './Rules';

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState('');
  const [showrules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (!selectNumber) {
      setError('You have not selected any number');
      return;
    }
    setError('');

    if (selectNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore score={score} />
        <NumberSelector error={error} setError={setError} selectNumber={selectNumber} setSelectedNumber={setSelectedNumber} />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>{showrules ? 'Hide' : 'Show'} Rules</Button>
      </div>
      {showrules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;
  .top-section {
    display: flex;
    justify-content: space-around;
    align-items: end;
    flex-wrap: wrap;
  }
  .btns {
    display: flex;
    flex-direction: column;
    max-width: 220px;
    justify-content: center;
    margin: 0 auto;
    margin-top: 20px;
    gap: 10px;
  }

  @media (max-width: 768px) {
    .top-section {
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
    }
    .btns {
      max-width: 100%;
      gap: 8px;
    }
  }

  @media (max-width: 480px) {
    padding-top: 50px;
    .top-section {
      margin-bottom: 15px;
    }
    .btns {
      max-width: 100%;
      gap: 6px;
    }
  }
`;
