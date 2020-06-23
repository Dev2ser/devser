import React from 'react';
import NavBar from './libs/NavBar';
import Hero from './libs/Hero';
import About from './libs/About';
import Timeline from './libs/Timeline/Timeline';

export default class Home extends React.Component {
	render() {
		return (
			<div>
				<NavBar />
				<Hero />
				<About />
				<Timeline />
			</div>
		);
	}
}
