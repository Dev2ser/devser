import React from 'react';

export default class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      btnIsDisabled: false,
      showText: false,
    };
  }

  componentDidMount() {
    require('../scss/Contact.scss');
  }

  btnStyles =
    'flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg';

  handleSendEmail = () => {
    this.setState((prevState) => ({
      btnIsDisabled: !prevState.btnIsDisabled,
      showText: !prevState.showText,
    }));
    setTimeout(() => {
      this.setState((prevState) => ({
        showText: !prevState.showText,
      }));
    }, 5000);
  };

  render() {
    return (
      <section id="contact" className="text-gray-700 body-font relative">
        <div className="container px-5 pb-24 pt-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Me
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              You can contact me via Email or on one of my social media
              accounts.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <input
                  className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
                  placeholder="Name"
                  type="text"
                />
              </div>
              <div className="p-2 w-1/2">
                <input
                  className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
                  placeholder="Email"
                  type="email"
                />
              </div>
              <div className="p-2 w-full">
                <textarea
                  className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="p-2 w-full">
                <button
                  className={
                    this.state.btnIsDisabled
                      ? `${this.btnStyles} rounded opacity-50 cursor-not-allowed`
                      : this.btnStyles
                  }
                  onClick={this.handleSendEmail}
                  disabled={this.state.btnIsDisabled}
                >
                  Send
                </button>
                <p
                  className={`lg:w-2/3 mx-auto leading-relaxed text-xs text-center mt-4 transition-opacity duration-200 ease-out opacity-${
                    this.state.showText ? 1 : 0
                  }`}
                >
                  Will be in touch with you soon
                </p>
              </div>
              <div className="p-2 w-full pt-4 mt-2 border-t border-gray-200 text-center">
                <a
                  className="text-indigo-500"
                  href="mailto:devser.co@gmail.com?subject=Contact"
                >
                  devser.co@gmail.com
                </a>
                <p className="leading-normal my-5">{''}</p>
                <span className="inline-flex">
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
                    className="ml-4 text-gray-500 hover:text-indigo-500"
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
                    className="ml-4 text-gray-500 hover:text-indigo-500"
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
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a
                    className="ml-4 text-gray-500 hover:text-indigo-500"
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
          </div>
        </div>
      </section>
    );
  }
}
