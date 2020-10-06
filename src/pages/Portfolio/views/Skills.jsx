import React, { Component } from 'react';
import { skillsData } from '../../../data/skillsData';
import { IconContext } from 'react-icons';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaNodeJs,
  FaTerminal,
  FaVectorSquare,
  FaPalette,
  FaBootstrap,
} from 'react-icons/fa';
// ts
// tailwind

export default class Skills extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    require('../scss/Skills.scss');
  }

  getIconDetails = (skill) => {
    if (skill.src === 'html') {
      return <FaHtml5 />;
    } else if (skill.src === 'css') {
      return <FaCss3Alt />;
    } else if (skill.src === 'javascript') {
      return <FaJs /* color="#F0DB4F" */ />;
    } else if (skill.src === 'typescript') {
      return <FaJs />;
    } else if (skill.src === 'react') {
      return <FaReact />;
    } else if (skill.src === 'python') {
      return <FaPython />;
    } else if (skill.src === 'nodejs') {
      return <FaNodeJs />;
    } else if (skill.src === 'terminal') {
      return <FaTerminal />;
    } else if (skill.src === 'svg') {
      return <FaVectorSquare />;
    } else if (skill.src === 'designer') {
      return <FaPalette />;
    } else if (skill.src === 'tailwindcss') {
      return <FaCss3Alt />;
    } else if (skill.src === 'bootstrap') {
      return <FaBootstrap />;
    }
  };

  render() {
    return (
      <IconContext.Provider
        value={{
          className: 'text-indigo-500 w-12 h-12 mb-3 inline-block',
        }}
      >
        <div id="skills">
          <section className="text-gray-700 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                  Skills and Expertise
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                  Whatever cardigan tote bag tumblr hexagon brooklyn
                  asymmetrical gentrify, subway tile poke farm-to-table. Franzen
                  you probably haven't heard of them man bun deep jianbing
                  selfies heirloom prism food truck ugh squid celiac humblebrag.
                </p>
              </div>
              <div className="flex flex-wrap -m-4 text-center">
                {skillsData.map((skill) => {
                  return (
                    <div
                      key={skill.name}
                      className="p-4 md:w-1/4 sm:w-1/2 w-1/2 transition-transform duration-300 ease-in-out transform hover:scale-105"
                    >
                      <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                        {/* <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                        >
                          <path d="M145.2 96l66 746.6L512 928l299.6-85.4L878.9 96H145.2zm595 177.1l-4.8 47.2-1.7 19.5H382.3l8.2 94.2h335.1l-3.3 24.3-21.2 242.2-1.7 16.2-187 51.6v.3h-1.2l-.3.1v-.1h-.1l-188.6-52L310.8 572h91.1l6.5 73.2 102.4 27.7h.4l102-27.6 11.4-118.6H510.9v-.1H306l-22.8-253.5-1.7-24.3h460.3l-1.6 24.3z"></path>
                        </svg> */}
                        {this.getIconDetails(skill)}
                        <h2 className="title-font font-medium text-xl text-gray-900">
                          {skill.name}
                        </h2>
                        <p className="leading-relaxed text-xs">Website &gt;</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </IconContext.Provider>
    );
  }
}
