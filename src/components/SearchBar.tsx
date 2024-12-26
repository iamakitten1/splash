import React, { useState, useEffect } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  const [inputValue, setInputValue] = useState<string>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      onChange(inputValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue, onChange]);

  return (
    <div className="relative">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search photos..."
        className="p-2 border rounded-md transform -translate-y-1/2 text-gray-500 "
        aria-label="Search for photos"
      />
    </div>
  );
};

export default SearchBar;
