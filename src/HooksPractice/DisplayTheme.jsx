import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; // Correct path

const DisplayTheme = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      The current theme is <strong>{theme}</strong>.
    </div>
  );
};

export default DisplayTheme;
