import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b-2 border-blue-800 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="http://localhost:5173/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://e7.pngegg.com/pngimages/606/201/png-clipart-mississauga-library-system-school-library-public-library-online-public-access-catalog-library-miscellaneous-trademark-thumbnail.png" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BookHive</span>
        </a>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="block w-96 p-2 pl-8 text-sm text-gray-900 border border-blue-800 rounded-lg bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-blue-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-800"
            />
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400 absolute left-3 top-3 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <button onClick={toggleMenu} className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600">
            <svg className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex items-center justify-between w-full md:w-auto`} id="navbar-search">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded md:p-0 ${isActive ? 'text-blue-700 dark:text-blue-500' : 'text-gray-900 dark:text-white'}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded md:p-0 ${isActive ? 'text-blue-700 dark:text-blue-500' : 'text-gray-900 dark:text-white'}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/books"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded md:p-0 ${isActive ? 'text-blue-700 dark:text-blue-500' : 'text-gray-900 dark:text-white'}`
                }
              >
                Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded md:p-0 ${isActive ? 'text-blue-700 dark:text-blue-500' : 'text-gray-900 dark:text-white'}`
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded md:p-0 ${isActive ? 'text-blue-700 dark:text-blue-500' : 'text-gray-900 dark:text-white'}`
                }
              >
                Signup
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
