import { useState } from 'react';

const Multiplier = () => {
  const [counter] = useState(-5);
  const [multiplierAns, setMultiplierAns] = useState(0);

  return (
    <div className='overflow-hidden bg-white shadow sm:rounded-lg'>
      <div className='px-4 py-5 sm:px-6'>
        <h1 className='text-3xl font-bold text-center mb-5'>
          Multiplier: {counter}
        </h1>
        <input
          type='text'
          className='w-full border border-gray-300 px-5 py-3 rounded-md focus:outline-none'
          placeholder='Enter Value'
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            setMultiplierAns(counter * +e.target.value)
          }
        />
        <div className='w-fit ml-auto mt-5 border border-gray-300 rounded-md p-5'>
          <p className='text-gray-700 text-xl'>
            {multiplierAns ? multiplierAns : 'Enter the value'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Multiplier;
