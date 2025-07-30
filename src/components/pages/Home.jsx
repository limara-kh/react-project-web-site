import React, { useEffect, useState } from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userFromStorage = localStorage.getItem('user');
    if (userFromStorage) {
      setUser(JSON.parse(userFromStorage));
    }
  }, []);

  return (
    <>
      <HeroSection />
      {user && (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h2>Қош келдіңіз, {user.name}!</h2>
          <p>Email: {user.email}</p>
        </div>
      )}
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
