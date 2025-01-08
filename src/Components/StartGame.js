import React from 'react';
import styled from 'styled-components';
import { Button } from "../Styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Wrapper>
      <div>
        <img src="/images/dices 1.png" alt="dice" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Start Now</Button>
      </div>
    </Wrapper>
  );
};

export default StartGame;

const Wrapper = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  text-align: center;

  .content {
    h1 {
      font-size: 80px;
      white-space: nowrap;
      margin-top: 20px;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    .content h1 {
      font-size: 60px; 
    }

    img {
      width: 60%;
    }

    .content {
      margin-top: 20px;
    }
  }

  @media (max-width: 480px) {
    .content h1 {
      font-size: 40px; 
    }

    img {
      width: 50%; 
    }

    .content {
      margin-top: 15px;
    }
  }
`;
