import useCounter from '../hooks/useCounter';

const Divider = () => {
  const [counter]= useCounter();

  return (
    <div className='overflow-hidden bg-white shadow sm:rounded-lg'>
      <div className='px-4 py-5 sm:px-6'>
        <h1 className='text-3xl font-bold text-center mb-5'>
          Divider
        </h1>
        <p className="text-center text-lg my-5">6 / {counter}</p>
        <div className='w-fit ml-auto mt-5 border border-gray-300 rounded-md p-5'>
          <p className='text-gray-700 text-xl'>
            {counter ? 6/+counter : 'Enter the value'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Divider;
