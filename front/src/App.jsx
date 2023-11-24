import './App.css';
import Navbar from './layout/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from './api';
import Contenu from './contenu';


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