import './App.css';
import Navbar from './layout/Navbar';
import Contenu from './contenu'
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from './api';

function App() {
  const [user, setUser] = useState(null);

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
        <Navbar user={user} setUser={setUser} />
        <Contenu user={user} />
      </div>
    </Router>
  );
}

export default App;