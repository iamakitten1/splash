import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-green-500 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/photo">Photos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
