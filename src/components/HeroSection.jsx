import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>V–Value
          L–Love
          T–Team
          R–Respect</h1>
      <p>Жақсылық жасауға бір қадам қалды!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          ЕРІКТІ БОЛУ
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
