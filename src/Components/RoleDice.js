import styled from 'styled-components';

const RoleDice = ({ currentDice, roleDice }) => {
  return (
    <RoleDiceContainer>
      <div className="dice" onClick={() => { roleDice(); }}>
        <img src={`/images/dicerole/dice_${currentDice}.png`} alt="dice" />
      </div>
      <p>Click on Dice to roll</p>
    </RoleDiceContainer>
  );
};

export default RoleDice;

const RoleDiceContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  p {
    font-size: 24px;
    margin-top: 10px;
  }

  .dice img {
    width: 100px;
    height: 100px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
  }

  .dice img:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    .dice img {
      width: 80px;
      height: 80px;
    }
    p {
      font-size: 20px; 
    }
  }

  @media (max-width: 480px) {
    .dice img {
      width: 60px; 
      height: 60px;
    }
    p {
      font-size: 18px;
    }
  }
`;
