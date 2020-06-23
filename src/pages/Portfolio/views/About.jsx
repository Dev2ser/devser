import React from 'react';
import '../../../utils/tailwind.generated.css';
import '../css/About.scss';

export default class About extends React.Component {
	render() {
		return (
			<section className="text-gray-700 body-font">
				<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
					<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
						<img className="object-cover object-center rounded" alt="hero" src="/images/static/about.svg" />
					</div>
					<div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center">
						<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
							Let me introduce
							<br className="hidden lg:inline-block" />myself
						</h1>
						<p className="mb-8 leading-relaxed">
							I’m Yasser a junior web developer/designer, i’m currently in the 10th grade.. planning for a
							scholarship to MIT.
							<br className="hidden lg:inline-block" />
							<br className="hidden lg:inline-block" />
							{''} i first knew about coding when i was 13 years old, since then i have never stopped
							learning new technologies and programming languages and won’t ever stop.
						</p>
						<div className="flex justify-center">
							<button className="inline-flex py-2 px-6 focus:outline-none rounded text-lg cv">
								Download CV
							</button>
							<button className="ml-4 inline-flex py-2 px-8 focus:outline-none rounded text-lg skills">
								Skills
							</button>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
