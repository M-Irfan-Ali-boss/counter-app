import Divider from './components/Divider';
import Multiplier from './components/Multiplier';
import Subtracter from './components/Subtracter';

function App() {
  return (
    <div className='App w-full'>
      <div className='max-w-7xl mx-auto px-4 py-10'>
        <div className='grid grid-cols-2 gap-8'>
          <Multiplier />
          <Subtracter />
          <Divider />
        </div>
      </div>
    </div>
  );
}

export default App;
