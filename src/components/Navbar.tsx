import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

interface NavbarProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <nav className="bg-green-500 text-white p-4 fixed top-0 w-full shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-lg">
          PhotoGallery
        </Link>
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
      </div>
    </nav>
  );
};

export default Navbar;
