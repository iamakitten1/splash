import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

interface NavbarProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = ({ searchTerm, setSearchTerm }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

   
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? 'bg-green-300' : 'bg-green-500'
      } text-[grey] p-4 shadow-lg rounded-b-lg fixed top-0 left-0 w-full z-50 flex justify-between items-center transition-all duration-300`}
    >
      <ul className="flex space-x-8">
        <li>
          <Link
            to="/"
            className="hover:text-yellow-300 transition duration-300 ease-in-out font-semibold"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/photo"
            className="hover:text-yellow-300 transition duration-300 ease-in-out font-semibold"
          >
            Photos
          </Link>
        </li>
      </ul>
      
      <div className="relative w-full max-w-xs">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
      </div>
    </nav>
  );
};

export default Navbar;
