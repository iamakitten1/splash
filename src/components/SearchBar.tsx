import React from 'react';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ value, onChange }) => (
  <input
    type="text"
    placeholder="Search photos..."
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="border p-2 w-full"
  />
);

export default SearchBar;
