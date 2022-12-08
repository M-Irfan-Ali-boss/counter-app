import useCounter from '../hooks/useCounter';

const Counter = () => {
  const [counter, handleIncrement, handleDecrement] = useCounter();

  return (
    <div className='overflow-hidden bg-white shadow sm:rounded-lg'>
      <div className='px-4 py-5 sm:px-6'>
        <h1 className='text-3xl font-bold text-center mb-5'>Counter</h1>
        <div className='grid grid-cols-3 gap-4 align-items-center'>
          <button
            onClick={(): void => handleIncrement(1)}
            className='bg-blue-500 text-white py-3 rounded-md text-center w-full'>
            +
          </button>
          <h1 className='text-3xl font-bold text-center mb-5'>{+counter}</h1>
          <button
            onClick={(): void => handleDecrement(1)}
            className='bg-red-500 text-white rounded-md py-3 text-center w-full'>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
