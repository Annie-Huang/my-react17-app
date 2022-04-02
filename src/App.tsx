import React from 'react';
import './App.css';
import FRGrandParentInput from './components/FRGrandParentInput';
import UseRefExample3 from './components/UseRefExample3';

function App() {
  return (
    <div className='App'>
      <FRGrandParentInput />
      <hr style={{ margin: '40px 0', color: 'red' }} />
      <UseRefExample3 />
    </div>
  );
}

export default App;
