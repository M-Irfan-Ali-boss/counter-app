import { useState } from 'react';

function useCounter(): [
  number,
  (value: number) => void,
  (value: number) => void
] {
  const [counter, setCounter] = useState(7);

  const handleIncrement = (value: number): void => {
    setCounter(counter + value);
  };

  const handleDecrement = (value: number): void => {
    setCounter(counter - value);
  };

  return [counter, handleIncrement, handleDecrement];
}

export default useCounter;
