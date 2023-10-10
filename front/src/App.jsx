import './App.css';
import Navbar from './layout/Navbar';
import Contenu from './contenu'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='d-flex'>
        <Navbar />
        <Contenu />
      </div>
    </Router>
  );
}

export default App;