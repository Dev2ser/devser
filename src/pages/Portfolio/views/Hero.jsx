import React from 'react';
import { HeroSection } from '../../../data/pageData';
import { Button } from '../../../components/Buttons';

export default class Hero extends React.Component {
  componentDidMount() {
    require('../scss/Hero.scss');
  }

  render() {
    return (
      <section
        id="hero"
        className={`${HeroSection.lightbg ? '' : ''} text-gray-700 body-font`}
      >
        <div className="container mx-auto flex px-3 pt-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
            <h1
              className={`title-font sm:text-4xl text-3xl mb-4 font-medium ${
                HeroSection.lightText ? 'text-gray-300' : 'text-gray-900'
              } text-center md:text-left`}
            >
              {HeroSection.headline}
              <br className="md:hidden" />
              <span className="text-indigo-500">{HeroSection.highlighted}</span>
            </h1>
            <p className="mb-8 mr-12 ml-12 text-center leading-relaxed md:text-left md:mr-0 md:ml-0 xl:pr-72">
              {HeroSection.description}
            </p>
            {HeroSection.subDescription ? (
              <p className="mb-8 mr-12 ml-12 text-center leading-relaxed md:text-left md:mr-0 md:ml-0 xl:pr-72">
                {HeroSection.subDescription}
              </p>
            ) : null}
            <div className="flex justify-center">
              <a href={HeroSection.primaryButtonLink}>
                <Button
                  color="rgba(255, 255, 255)"
                  bgColor="rgba(102, 126, 234)"
                >
                  {HeroSection.primaryButtonLabel}
                </Button>
              </a>
              <a href={HeroSection.secondaryButtonLink}>
                <Button
                  color="rgba(74, 85, 104)"
                  bgColor="rgba(237, 242, 247)"
                  style={{ marginLeft: '1rem' }}
                >
                  {HeroSection.secondaryButtonLabel}
                </Button>
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt={HeroSection.alt}
              src={HeroSection.imgSrc}
              width="720"
              height="700"
            />
          </div>
        </div>
      </section>
    );
  }
}
