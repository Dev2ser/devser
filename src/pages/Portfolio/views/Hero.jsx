import React from 'react';

export default class Hero extends React.Component {
  componentDidMount() {
    require('../scss/Hero.scss');
  }

  render() {
    return (
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-3 pt-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Climb the ladder
              <br className="hidden lg:inline-block" /> to success
            </h1>
            <p className="mb-8 leading-relaxed">
              Hey, I’m Yasser a junior web developer and designer. I have high
              ambitions to get a scholarship to MIT
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Projects
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                Read more
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/images/static/ladder-700px.png"
            />
          </div>
        </div>
      </section>
    );
  }
}
