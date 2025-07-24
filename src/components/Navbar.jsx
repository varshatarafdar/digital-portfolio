import React from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-100 dark:bg-gray-900 shadow-md py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Digital portfolio </h1>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;