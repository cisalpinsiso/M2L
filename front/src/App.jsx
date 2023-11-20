import './App.css';
import Navbar from './layout/Navbar';
import MonCompte from './contenu/monCompte/monCompte';
import Contenu from './contenu'
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from './api';


function App() {
  const [user, setUser] = useState(null);
  const [useAlternateNavbar, setUseAlternateNavbar] = useState(false);

  useEffect(() => {
    api.getUser().then((res) => {
      if (res.data.success) {
        setUser(res.data.user);
      }
    })
  }, []);

  const toggleNavbar = () => {
    setUseAlternateNavbar(!useAlternateNavbar);
  }

  return (
    <Router>
      <div className='d-flex'>
        {useAlternateNavbar ? 
          <MonCompte user={user} toggleNavbar={toggleNavbar} /> : 
          <Navbar user={user} setUser={setUser} toggleNavbar={toggleNavbar} />
        }
        <Contenu user={user} />
      </div>
    </Router>
  );
}

export default App;