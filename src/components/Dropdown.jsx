import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropdownVariants = {
    open: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex font-bold justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-lg  text-gray-700 hover:bg-gray-50 focus:outline-none"
        >
          Technical Events
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06 0L10 10.5l3.71-3.29a.75.75 0 111.04 1.08l-4.25 3.5a.75.75 0 01-1.04 0l-4.25-3.5a.75.75 0 010-1.08z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={dropdownVariants}
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-56 rounded-md shadow-lg  bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
      >
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <Link to = "/events/tech/coding" className="block px-4 py-2 text-lg text-black hover:bg-gray-100" role="menuitem">
            Coding
          </Link>
          <Link to = "/events/tech/Tecnical-Quiz" className="block px-4 py-2 text-lg text-black hover:bg-gray-100" role="menuitem">
            Technical Quiz
          </Link>
          <Link to="/events/tech/Paper-Presentation"  className="block px-4 py-2 text-lg text-black hover:bg-gray-100" role="menuitem">
            Paper Presentation
          </Link>
          <Link to="/events/tech/Project-Expo"  className="block px-4 py-2 text-lg text-black hover:bg-gray-100" role="menuitem">
            Project Expo
          </Link>
          <Link to="/events/tech/Mystery-Sql"  className="block px-4 py-2 text-lg text-black hover:bg-gray-100" role="menuitem">
            Mystery SQL
          </Link>
          <a href="#"  className="block px-4 py-2 text-lg text-black hover:bg-gray-100" role="menuitem">
            Technical Game
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Dropdown;