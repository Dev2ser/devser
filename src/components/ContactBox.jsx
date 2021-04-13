import React, { useState } from 'react';

export function ContactBox() {
  const [btnIsDisabled, setBtnIsDisabled] = useState(false);
  const [showText, setShowText] = useState(false);

  const btnStyles =
    'flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg';

  const handleSendEmail = () => {
    setBtnIsDisabled(!btnIsDisabled);
    setShowText(!showText);
    setTimeout(() => {
      setShowText(!showText);
    }, 5000);
  };

  return (
    <section className="text-gray-700 body-font relative">
      <div className="container px-5 pb-2 pt-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Me
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            You can contact me via Email or on one of my social media accounts.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
                placeholder="Name"
                type="text"
              />
            </div>
            <div className="p-2 w-1/2">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
                placeholder="Email"
                type="email"
              />
            </div>
            <div className="p-2 w-full">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="p-2 w-full">
              <button
                className={
                  btnIsDisabled
                    ? `${btnStyles} rounded opacity-50 cursor-not-allowed`
                    : btnStyles
                }
                onClick={handleSendEmail}
                disabled={btnIsDisabled}
              >
                Send
              </button>
              <p
                className={`lg:w-2/3 mx-auto leading-relaxed text-xs text-center mt-4 transition-opacity duration-200 ease-out opacity-${
                  showText ? 1 : 0
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
