import React, { useEffect, useState } from 'react';

export function List(props) {
  const [isExtendedList, setIsExtendedList] = useState();
  const { heading, items } = props;
  useEffect(() => {
    if (items.length > 5) {
      setIsExtendedList(true);
    }
    if (items.length > 11) {
      items.length = 11;
    }
  }, [items.length]);

  return (
    <React.Fragment>
      {isExtendedList ? (
        <ExtendedList heading={heading} items={items} />
      ) : (
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
            {heading}
          </h2>
          <nav className="list-none mb-10">
            {items.slice(0, 5).map((item, index) => (
              <li key={index}>
                <a
                  className="transition-colors duration-200 ease-in-out text-gray-600 hover:text-gray-800 cursor-pointer no-underline hover:no-underline"
                  href="#footer"
                >
                  {item}
                </a>
              </li>
            ))}
          </nav>
        </div>
      )}
    </React.Fragment>
  );
}

export function ExtendedList(props) {
  const { heading, items } = props;
  return (
    <React.Fragment>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          {heading}
        </h2>
        <nav className="list-none mb-10">
          {items.slice(0, 5).map((item, index) => (
            <li key={index}>
              <a
                className="transition-colors duration-200 ease-in-out text-gray-600 hover:text-gray-800 cursor-pointer no-underline hover:no-underline"
                href="#footer"
              >
                {item}
              </a>
            </li>
          ))}
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <nav className="list-none mt-8 mb-10">
          {items.slice(5, -1).map((item, index) => (
            <li key={index}>
              <a
                className="transition-colors duration-200 ease-in-out text-gray-600 hover:text-gray-800 no-underline hover:no-underline"
                href="#footer"
              >
                {item}
              </a>
            </li>
          ))}
        </nav>
      </div>
    </React.Fragment>
  );
}
