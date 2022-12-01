import Counter from './components/Counter';
import Divider from './components/Divider';
import Multiplier from './components/Multiplier';
import Subtracter from './components/Subtracter';

function App() {
  return (
    <div className='App w-full'>
      <div className='bg-gray-800 text-center p-10'>
        <h1 className='text-white text-3xl italic font-bold'>Counter</h1>
      </div>
      <div className='max-w-7xl mx-auto px-4 py-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <Multiplier />
          <Subtracter />
          <Divider />
          <Counter />
        </div>
      </div>
    </div>
  );
}

export default App;
