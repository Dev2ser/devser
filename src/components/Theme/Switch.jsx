import React, { useContext, useEffect } from 'react';
import { IoMdMoon as Moon, IoMdSunny as Sun } from 'react-icons/io';
import { ThemeContext } from './index';

export function Switch() {
  const { dark, toggle } = useContext(ThemeContext);

  useEffect(() => {
    require('./Switch.scss');
  });

  return (
    <button className="Switch" onClick={() => toggle()}>
      <Sun className={`icon ${!dark ? 'active' : ''}`} />
      <Moon className={`icon ${dark ? 'active' : ''}`} />
    </button>
  );
}
