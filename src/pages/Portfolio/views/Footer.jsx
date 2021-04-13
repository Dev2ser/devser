import React from 'react';
import Logo from '../../../assets/icons/logo.svg';
import { List, Social, MailBox } from '../../../components';
import { skillsData } from '../../../data/skillsData';

let rawSkills = [];
skillsData.map((skill) => rawSkills.push(skill.name));

export default class Footer extends React.Component {
  componentDidMount() {
    require('../scss/Footer.scss');
  }

  render() {
    return (
      <footer id="footer" className="text-gray-700 body-font">
        <div className="container px-5 py-0 mx-auto md:py-24">
          <div className=" hidden md:flex flex-wrap md:text-left text-center order-first">
            <List
              heading="SECTIONS"
              items={['Hero', 'About', 'Journey', 'Skills', 'Contact']}
            />
            <List heading="SKILLS" items={rawSkills} />
            <MailBox />
          </div>
        </div>
        <div className="bg-gray-200">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a
              className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 no-underline hover:no-underline"
              href="/"
            >
              <img
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                src={Logo}
                alt="Devser logo"
              />
              <span className="ml-3 text-xl">Devser</span>
            </a>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2021 Devser —
              <a
                className="text-gray-600 ml-1"
                href="https://twitter.com/9flysX"
                target="_blank"
                rel="noopener noreferrer"
              >
                @9flysX
              </a>
            </p>
            <Social extraStyles="sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start" />
          </div>
        </div>
      </footer>
    );
  }
}
