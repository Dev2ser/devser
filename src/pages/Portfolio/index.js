import React from 'react';
import { SEO } from '../../components';
import Navigation from './views/Navigation';
import Hero from './views/Hero';
import About from './views/About';
import Timeline from './views/Timeline/Timeline';
import Skills from './views/Skills';
// eslint-disable-next-line
import Projects from './views/Projects';
import Contact from './views/Contact';
// eslint-disable-next-line
import FAQ from './views/FAQ';
import Footer from './views/Footer';

export class Portfolio extends React.Component {
  componentDidMount() {
    require('../../utils/tailwind.generated.css');
  }
  render() {
    return (
      <React.Fragment>
        <SEO title="Home"/>
        <Navigation />
        <Hero />
        <About />
        <Timeline />
        <Skills />
        {/* <Projects /> */}
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
}
