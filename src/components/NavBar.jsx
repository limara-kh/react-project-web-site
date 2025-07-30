import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './NavBar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [language, setLanguage] = useState('kz');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userFromStorage = localStorage.getItem('user');
    if (userFromStorage) {
      setUser(JSON.parse(userFromStorage));
    }
  }, []);
  
  const translations = {
    kz: {
      home: 'Бастапқы бет',
      services: 'Қызметтер',
      volunteer: 'Волонтёр',
      signup: 'Тіркелу',
      logo: 'VLTR.kz'
    },
    ru: {
      home: 'Главная',
      services: 'Услуги',
      volunteer: 'Волонтёр',
      signup: 'Регистрация',
      logo: 'VLTR.kz'
    },
    en: {
      home: 'Home',
      services: 'Services',
      volunteer: 'Volunteer',
      signup: 'Sign Up',
      logo: 'VLTR.kz'
    }
  };

  const t = translations[language];

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return () => window.removeEventListener('resize', showButton);
  }, []);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            {t.logo}
            <i className='fab fa-typo3' />
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                {t.home}
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                {t.services}
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/volunteer' className='nav-links' onClick={closeMobileMenu}>
                {t.volunteer}
              </Link>
            </li>
            <li>
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                {t.signup}
              </Link>
            </li>
          </ul>

          <div className='navbar-right'>
            <div className="language-switcher">
              <button
                className={language === 'kz' ? 'lang-btn active' : 'lang-btn'}
                onClick={() => setLanguage('kz')}
              >
                KZ
              </button>
              <button
                className={language === 'ru' ? 'lang-btn active' : 'lang-btn'}
                onClick={() => setLanguage('ru')}
              >
                RU
              </button>
              <button
                className={language === 'en' ? 'lang-btn active' : 'lang-btn'}
                onClick={() => setLanguage('en')}
              >
                EN
              </button>
            </div>
            {user && <span className="user-greeting">Сәлем, {user.name}!</span>}

            {button && <Button buttonStyle='btn--outline'>{t.signup}</Button>}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
