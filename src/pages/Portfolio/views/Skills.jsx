import React from 'react';
import { IconContext } from 'react-icons';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaNodeJs,
  FaTerminal,
  FaVectorSquare,
  FaPalette,
  FaBootstrap,
} from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { SkillsSection } from '../../../data/pageData';
import { skillsData } from '../../../data/skillsData';

export default class Skills extends React.Component {
  constructor() {
    super();
    this.state = {
      numberOfShown: 8,
      limit: 8,
    };
  }

  componentDidMount() {
    require('../scss/Skills.scss');
  }

  onLoadMore = () => {
    this.setState((prevState) => ({
      numberOfShown: prevState.numberOfShown + 4,
      limit: prevState.limit + 4,
    }));
  };

  renderSkills = () => {
    return skillsData.slice(0, this.state.limit).map((skill) => {
      return (
        <div
          key={skill.name}
          className="p-4 md:w-1/4 sm:w-1/2 w-1/2 transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            {this.getIconDetails(skill)}
            <h2 className="title-font font-medium text-xl text-gray-900">
              {skill.name}
            </h2>
            <p className="leading-relaxed text-xs">Website &gt;</p>
          </div>
        </div>
      );
    });
  };

  getIconDetails = (skill) => {
    if (skill.src === 'html') {
      return <FaHtml5 />;
    } else if (skill.src === 'css') {
      return <FaCss3Alt />;
    } else if (skill.src === 'javascript') {
      return <SiJavascript /* color="#F0DB4F" */ />;
    } else if (skill.src === 'typescript') {
      return <SiTypescript />;
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
      return <SiTailwindcss />;
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
        <section id="skills" className="text body-font my-12">
          <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-12 text-gray-900">
                {SkillsSection.headline}
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                {SkillsSection.description}
              </p>
            </div>
            <div className="flex flex-wrap -m-4 text-center">
              {this.renderSkills()}
            </div>
          </div>
          {this.state.numberOfShown >= skillsData.length ? (
            ''
          ) : (
            <div className="container w-full mx-auto text-center">
              <button className="" onClick={this.onLoadMore}>
                {SkillsSection.primaryButtonLabel}
              </button>
            </div>
          )}
        </section>
      </IconContext.Provider>
    );
  }
}
