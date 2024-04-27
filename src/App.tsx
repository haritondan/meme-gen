// src/App.tsx
import React, { useEffect, useState } from 'react';
import './App.css';
import MemeGenerator from './Components/meme-generator/meme-generator';
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";


const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme as 'light' | 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className={`App ${theme}`}>
      <header>
        <h1>Meme Generator</h1>
        <button onClick={toggleTheme} className='themeButton'>
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
      </header>
      <main>
        <MemeGenerator />
      </main>
    </div>
  );
};

export default App;
