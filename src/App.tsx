import Divider from './components/Divider';
import Multiplier from './components/Multiplier';

function App() {
  return (
    <div className='App w-full'>
      <div className='max-w-7xl mx-auto px-4 py-10'>
        <div className='grid grid-cols-2 gap-8'>
          <Multiplier />
          <Divider />
        </div>
      </div>
    </div>
  );
}

export default App;
