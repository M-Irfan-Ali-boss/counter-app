import {  useState,useEffect, useDebugValue } from 'react';

function useCounter():[number,(value:number)=>void,(value:number)=>void] {
  const [counter, setCounter] = useState(7);

  useDebugValue(counter)

  const handleIncrement = (value:number):void => {
    setCounter(counter+value)
  }

  const handleDecrement = (value:number):void => {
    setCounter(counter-value)
  }

  useEffect(() => {}, [counter])

  return [counter,handleIncrement,handleDecrement];
}

export default useCounter;

// import { useEffect, useRef } from 'react';

// function useCounter() {
//   const counter = useRef(7);

//   const handleIncrement = (value:number):void => {
//     counter.current += value
//   }

//   const handleDecrement = (value:number):void => {
//     counter.current -= value
//   }

//   useEffect(() => {
//   }, [counter.current])
  

//   return {counter:counter.current,handleIncrement,handleDecrement};
// }

// export default useCounter;