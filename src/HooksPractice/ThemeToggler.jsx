import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; // Correct path

const ThemeToggler = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
};

export default ThemeToggler;
