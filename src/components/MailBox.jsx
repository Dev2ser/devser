import React from 'react';

export function MailBox() {
  return (
    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
        SUBSCRIBE
      </h2>
      <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center md:justify-start">
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
  );
}
