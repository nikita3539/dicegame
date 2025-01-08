import styled from 'styled-components';

const NumberSelector = ({ setError, error, selectNumber, setSelectedNumber }) => {
  const arrnumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError('');
  };

  return (
    <NumberSelectorContainer>
      {error && <p className="error">{error}</p>}
      <div className="flex">
        {arrnumber.map((value) => (
          <Box
            isSelected={value === selectNumber}
            key={value}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    justify-content: center;
  }
  p {
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    margin-top: 10px;
  }

  .error {
    color: red;
  }

  @media (max-width: 768px) {
    .flex {
      gap: 16px;
    }
    p {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    .flex {
      gap: 12px;
      justify-content: center;
    }
    p {
      font-size: 18px;
    }
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? 'black' : 'white')};
  color: ${(props) => (props.isSelected ? 'white' : 'black')};

  @media (max-width: 768px) {
    height: 60px;
    width: 60px;
    font-size: 20px;
  }

  @media (max-width: 480px) {
    height: 50px;
    width: 50px;
    font-size: 18px;
  }
`;
