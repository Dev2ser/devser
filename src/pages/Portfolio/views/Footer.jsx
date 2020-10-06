import React from 'react';
import Logo from '../../../assets/icons/logo.svg';

export default class Footer extends React.Component {
  componentDidMount() {
    require('../scss/Footer.scss');
  }

  render() {
    return (
      <footer id="footer" className="text-gray-700 body-font">
        <div className="container px-5 py-0 mx-auto md:py-24">
          <div className=" hidden md:flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                SECTIONS
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-800 cursor-pointer"
                    href="#hero"
                  >
                    Hero
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-800 cursor-pointer"
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-800 cursor-pointer"
                    href="#journey"
                  >
                    Journey
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-800 cursor-pointer"
                    href="#skills"
                  >
                    Skills
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                SKILLS
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-800"
                    href="#skills"
                  >
                    HTML5
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-800"
                    href="#skills"
                  >
                    CSS3
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-800"
                    href="#skills"
                  >
                    JavaScript
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-800"
                    href="#skills"
                  >
                    TypeScript
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <nav className="list-none mt-8 mb-10">
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-800"
                    href="#skills"
                  >
                    Python
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-800"
                    href="#skills"
                  >
                    NodeJS
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-800"
                    href="#skills"
                  >
                    TailwindCSS
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-800"
                    href="#skills"
                  >
                    Bootstrap
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                SUBSCRIBE
              </h2>
              <div className="flex xl:flex-no-wrap md:flex-no-wrap lg:flex-wrap flex-wrap justify-center md:justify-start">
                <input
                  className="w-40 sm:w-auto bg-gray-100 rounded xl:mr-4 lg:mr-0 sm:mr-4 mr-2 border border-gray-400 focus:outline-none focus:border-indigo-500 text-base py-2 px-4"
                  placeholder="Email"
                  type="text"
                />
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Submit
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
                Subscribing to the newsletter allows me
                <br className="lg:block" /> to send weekly emails!
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-200">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a
              className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 no-underline hover:no-underline"
              href="/"
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg> */}
              <img
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                src={Logo}
                alt="Devser logo"
              />
              <span className="ml-3 text-xl">Devser</span>
            </a>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2020 Devser —
              <a
                className="text-gray-600 ml-1"
                href="https://twitter.com/9flysX"
                target="_blank"
                rel="noopener noreferrer"
              >
                @9flysX
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a
                className="text-gray-500 hover:text-indigo-500"
                href="https://www.facebook.com/robert.joining.54"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a
                className="ml-3 text-gray-500 hover:text-indigo-500"
                href="https://twitter.com/9flysX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a
                className="ml-3 text-gray-500 hover:text-indigo-500"
                href="https://www.instagram.com/dev2ser"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a
                className="ml-3 text-gray-500 hover:text-indigo-500"
                href="https://github.com/Dev2ser"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    );
  }
}
