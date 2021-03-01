import React from 'react';
import { NavigationSection } from '../../../data/pageData';
import { NavItem, ActionItem, Logo, SimpleSwitch } from '../../../components';
import { db } from '../../../config/base';
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

  toggleDropdown = () => {
    this.setState((prevState) => ({
      dropdown: !prevState.dropdown,
    }));
  };

  toggleMenu = () => {
    this.setState((prevState) => ({
      menu: !prevState.menu,
    }));
    document.getElementById('menu-icon').classList.toggle('is-active');
  };

  render() {
    return (
      <nav id="navigation" className="bg-gray-800" ref={this.wrapperRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Logo className="h-8 w-8" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline">
                  {NavigationSection.list.map((li, index) => {
                    return <NavItem key={index} obj={li} mobile={false} />;
                  })}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <div className="mr-2">
                  <SimpleSwitch />
                </div>
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
                        className="py-1 rounded-md bg-white ring-1 ring-white ring-opacity-50"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu"
                      >
                        {NavigationSection.actionMenu.map((action, index) => {
                          return (
                            <ActionItem
                              key={index}
                              obj={action}
                              mobile={false}
                              role="menuitem"
                            />
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden" onClick={this.toggleMenu}>
              <button
                id="menu-icon"
                className="hamburger hamburger--spring inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                aria-label="menu"
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
                {/* <svg
                  className="block h-8 w-8"
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
                </svg> */}
              </button>
            </div>
          </div>
        </div>
        {this.state.menu && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 sm:px-3">
              {NavigationSection.list.map((li, index) => {
                return <NavItem key={index} obj={li} mobile={true} />;
              })}
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
                {NavigationSection.actionMenu.map((action, index) => {
                  return <ActionItem key={index} obj={action} mobile={true} />;
                })}
              </div>
            </div>
          </div>
        )}
      </nav>
    );
  }
}
