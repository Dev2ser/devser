import React from 'react';
import Logo from '../../../assets/icons/logo.svg';
import { db } from '../../../config/base';
import { Logout } from '../../../service/Authentication';
import { getUser } from '../../../service/Authentication';

export default class Navigation extends React.Component {
  constructor() {
    super();
    this.wrapperRef = React.createRef();
    this.state = {
      dropdown: false,
      menu: false,
      user: getUser(),
      userData: null,
    };
  }

  getUserData = async () => {
    await db
      .collection('users')
      .doc(this.state.user.uid)
      .get()
      .then((doc) => {
        this.setState(() => ({
          userData: doc.data(),
        }));
        console.log(doc.data());
      });
  };

  componentDidMount() {
    require('../scss/Navigation.scss');
    document.addEventListener('mousedown', this.handleClickOutside);
    this.getUserData();
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.setState(() => ({
        dropdown: false,
      }));
    }
  };

  toggleDropdown = () => {
    this.setState((prevState) => ({
      dropdown: !prevState.dropdown,
    }));
  };

  toggleMenu = () => {
    this.setState((prevState) => ({
      menu: !prevState.menu,
    }));
  };

  render() {
    return (
      <div id="navigation" ref={this.wrapperRef}>
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="h-8 w-8" src={Logo} alt="Devser logo" />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline">
                    <a
                      href="/#"
                      className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 no-underline focus:outline-none focus:text-white focus:bg-gray-700 hover:no-underline"
                    >
                      Home
                    </a>
                    <a
                      href="#about"
                      className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 no-underline hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 hover:no-underline"
                    >
                      About
                    </a>
                    <a
                      href="#journey"
                      className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 no-underline hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 hover:no-underline"
                    >
                      Journey
                    </a>
                    <a
                      href="#skills"
                      className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 no-underline hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 hover:no-underline"
                    >
                      Skills
                    </a>
                    <a
                      href="#faq"
                      className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 no-underline hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 hover:no-underline"
                    >
                      FAQ
                    </a>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
                    aria-label="Notifications"
                  >
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </button>

                  <div className="ml-3 relative">
                    <div>
                      <button
                        className="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid"
                        id="user-menu"
                        aria-label="User menu"
                        aria-haspopup="true"
                        onClick={this.toggleDropdown}
                      >
                        <svg
                          fill="rgb(203, 213, 224)"
                          className="h-8 w-8 rounded-full"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" />
                        </svg>
                      </button>
                    </div>
                    {this.state.dropdown && (
                      <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                        <div
                          className="py-1 rounded-md bg-white shadow-xs"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="user-menu"
                        >
                          <a
                            href="/profile"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 no-underline hover:no-underline"
                            role="menuitem"
                          >
                            Your Profile
                          </a>
                          <a
                            href="/settings"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 no-underline hover:no-underline"
                            role="menuitem"
                          >
                            Settings
                          </a>
                          <a
                            href="/auth/login"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 no-underline hover:no-underline"
                            role="menuitem"
                            onClick={Logout}
                          >
                            Sign out
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden" onClick={this.toggleMenu}>
                <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                  <svg
                    className="block h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>

                  <svg
                    className="hidden h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
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
            </div>
          </div>
          {this.state.menu && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 sm:px-3">
                <a
                  href="/#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 no-underline focus:outline-none focus:text-white focus:bg-gray-700 hover:no-underline"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 no-underline hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 hover:no-underline"
                >
                  About
                </a>
                <a
                  href="#journey"
                  className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 no-underline hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 hover:no-underline"
                >
                  Journey
                </a>
                <a
                  href="#skills"
                  className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 no-underline hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 hover:no-underline"
                >
                  Skills
                </a>
                <a
                  href="#faq"
                  className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 no-underline hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 hover:no-underline"
                >
                  FAQ
                </a>
              </div>
              <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <svg
                      fill="rgb(203, 213, 224)"
                      className="h-10 w-10 rounded-full"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">
                      {this.state.userData.username ||
                        this.state.user.displayName}
                    </div>
                    <div className="mt-1 text-sm font-medium leading-none text-gray-400">
                      {this.state.user.email}
                    </div>
                  </div>
                </div>
                <div className="mt-3 px-2">
                  <a
                    href="/profile"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 no-underline hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 hover:no-underline"
                  >
                    Your Profile
                  </a>
                  <a
                    href="/settings"
                    className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 no-underline hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 hover:no-underline"
                  >
                    Settings
                  </a>
                  <a
                    href="/auth/login"
                    className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 no-underline hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 hover:no-underline"
                    onClick={Logout}
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    );
  }
}
