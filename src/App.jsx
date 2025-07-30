import React, { useState } from 'react'
// import UserContext from './UserContext';
// import './App.css'
// import UST from './UST'
function App() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const lastChar = value.slice(-1);
    if (lastChar) {
      console.log(lastChar.toUpperCase());
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log("Submitted!");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Пернетақта шебері</h2>
      <input
        type="text"
        placeholder="Мәтін енгізіңіз..."
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        style={{ padding: '10px', fontSize: '16px', width: '300px' }}
      />
    </div>
  );
}


export default App