import logo from './logo.svg';
import './App.css';
import Nvabar from './components/Nvabar';
import Data from './components/Data'
import { useContext } from 'react';
import { DataContext } from './components/DataContext';
import { useSelector } from 'react-redux';

function App() {
 const {toggle,state} = useContext(DataContext); 
 const amount = useSelector(state => state);
 console.log(amount)
 return (
    <>
      <main className=''>
        <Nvabar />
        <div className='text-center'>
          <h1 >Account</h1>
          <p>Your Balance : {amount}</p>
        </div>
        <Data />
        <p className='text-white'>{}</p>
      </main>
      <button onClick={()=>toggle()} >Theme</button>
    </>
  );
}

export default App;
