import React from 'react';
import Navigation from './views/Navigation';
import Hero from './views/Hero';
import About from './views/About';
import Timeline from './views/Timeline/Timeline';
// eslint-disable-next-line
import Skills from './views/Skills';
import Exp from './views/Exp';
// eslint-disable-next-line
import Projects from './views/Projects';

export default class Home extends React.Component {
  componentDidMount() {
    require('../../utils/tailwind.generated.css');
  }
  render() {
    return (
      <div>
        <Navigation />
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Projects />
        <Exp />
      </div>
    );
  }
}
