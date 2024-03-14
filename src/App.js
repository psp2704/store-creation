import logo from './logo.svg';
import './App.css';
import Nvabar from './components/Nvabar';
import Data from './components/Data'

function App() {
  return (
    <>
      <Nvabar />
      <div className='text-center'>
        <h1 >Account</h1>
        <p>Your Balance : 10000</p>
      </div>
      <Data />
    </>
  );
}

export default App;
