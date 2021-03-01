import React, { useContext, useEffect } from 'react';
import { Switch } from '@material-ui/core';
import { IoMdMoon as Moon, IoMdSunny as Sun } from 'react-icons/io';
import { ThemeContext } from './index';

export function SimpleSwitch() {
  const { dark, toggle } = useContext(ThemeContext);

  const handleChange = () => {
    toggle();
  };

  return (
    <Switch
      checked={dark ? true : false}
      onChange={handleChange}
      color="primary"
      name="themeSwitcher"
      inputProps={{ 'aria-label': 'change theme' }}
    />
  );
}

export function SwitchWithIcons() {
  const { dark, toggle } = useContext(ThemeContext);

  useEffect(() => {
    require('./Switches.scss');
  });

  return (
    <button className="Switch" onClick={() => toggle()}>
      <Sun className={`icon ${!dark ? 'active' : ''}`} />
      <Moon className={`icon ${dark ? 'active' : ''}`} />
    </button>
  );
}
