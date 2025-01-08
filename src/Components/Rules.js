import React from 'react';
import styled from 'styled-components';

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>select any number</p>
        <p>click on dice image</p>
        <p>after click on dice if selected number is equal to dice number you will get same point as dice</p>
        <p>if you get wrong guess then 2 points will be deducted</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  background-color: #fbf1f1;
  padding: 20px;
  margin: 0 auto;
  max-width: 800px;
  margin-top: 30px;
  justify-content: center;
  border-radius: 10px;
  
  h2 {
    font-size: 24px;
    text-align: center;
  }
  
  .text {
    margin-top: 24px;
  }

  p {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 12px;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 15px;
    
    h2 {
      font-size: 22px;
    }

    p {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 10px;
    
    h2 {
      font-size: 20px;
    }

    p {
      font-size: 14px;
    }
  }
`;
