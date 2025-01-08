import React from 'react';
import styled from 'styled-components';

const TotalScore = ({ score }) => {
  return (
    <ScoreWrapper>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreWrapper>
  );
};

export default TotalScore;

const ScoreWrapper = styled.div`
  max-width: 200px;
  text-align: center;

  h1 {
    font-size: 100px;
    line-height: 100px;
  }

  p {
    font-size: 24px;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    max-width: 150px;

    h1 {
      font-size: 80px; 
      line-height: 80px;
    }

    p {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    max-width: 120px;

    h1 {
      font-size: 60px;
      line-height: 60px;
    }

    p {
      font-size: 18px; 
    }
  }
`;
