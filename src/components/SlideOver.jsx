import React, { useEffect, useState } from 'react';

export function SlideOver(props) {
  const [loading, setIsLoading] = useState(true);
  const { data, onCloseHandler, children } = props;

  useEffect(() => {
    setIsLoading(false);
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'unset');
  }, []);

  return (
    <React.Fragment>
      {loading ? null : (
        <div id="slide-over" className="fixed inset-0 overflow-hidden z-50">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
              onClick={onCloseHandler}
            ></div>
            <section
              className="absolute inset-y-0 right-0 pl-10 max-w-full flex"
              aria-labelledby="slide-over-heading"
            >
              <div className="relative w-screen max-w-md">
                <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                  <button
                    className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                    onClick={onCloseHandler}
                  >
                    <span className="sr-only">Close panel</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="h-full flex flex-col py-6 bg-white shadow-xl">
                  <div className="px-4 sm:px-6">
                    <h2
                      id="slide-over-heading"
                      className="text-lg font-medium text-gray-900"
                    >
                      Edit {data.name}
                    </h2>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6">
                    {/* Replace with content */}
                    {children}
                    {/* End replace */}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

// <!-- This example requires Tailwind CSS v2.0+ -->
