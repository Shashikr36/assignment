import { useState, useEffect } from 'react';
//import React from 'react';
import './App.css';

import Card from './components/Card.jsx';
import Loading from './components/Loading.jsx';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const url = 'https://randomuser.me/api/?page=1&results=1&seed=abc';
      try {
        const response = await fetch(url);
        const data = await response.json();
        setUser(data.results[0]);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {loading ? <Loading /> : user && <Card user={user} />}
    </div>
  );
}

export default App;
