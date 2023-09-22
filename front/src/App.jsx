import React, { useState } from 'react'; // 
import './App.css';
import Navbar from './layout/Navbar'; 
import cotedroit from './partiedroite/cotedroite.jsx'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
      <Navbar /> {}
      </div>
      <div>
      <cotedroit /> {}
      </div>
      
    </>
  );
}

export default App;