import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const Dropdown2 = () => {
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
          className="inline-flex text-lg justify-center font-bold w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white  text-gray-700 hover:bg-gray-50 focus:outline-none"
        >
          Non Technical Events
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
        className="absolute left-1/2 transform -translate-x-1/2 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
      >
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <Link to="/events/non-tech/Photography" className="block px-4 py-2 text-lg text-black hover:bg-gray-100" role="menuitem">
            Photography
          </Link>
          <Link to="/events/non-tech/Videography" className="block px-4 py-2 text-lg text-black hover:bg-gray-100" role="menuitem">
            Videography
          </Link>
          <Link to="/events/non-tech/PosterDesign"  className="block px-4 py-2 text-lg text-black hover:bg-gray-100" role="menuitem">
            Poster Design
          </Link>
          <Link to="/events/non-tech/Connection"  className="block px-4 py-2 text-lg text-black hover:bg-gray-100" role="menuitem">
            Connection
          </Link>
          <Link to="/events/non-tech/MarbleShowDown"  className="block px-4 py-2 text-lg text-black hover:bg-gray-100" role="menuitem">
            The Marble Showdown
          </Link>
          <a href="#"  className="block px-4 py-2 text-lg text-black hover:bg-gray-100" role="menuitem">
            Flip the Bottle
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Dropdown2;