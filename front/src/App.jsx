import './App.css';
import Navbar from './layout/Navbar'; 
import Contenu from './contenu'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Contenu />
    </Router>
  );
}

export default App;