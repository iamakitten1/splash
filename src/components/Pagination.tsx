import React from 'react';

interface Props {
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ currentPage, onPageChange }) => (
  <div className="flex justify-center mt-4">
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className="px-4 py-2 bg-gray-300 rounded mx-2 disabled:opacity-50"
    >
      Prev
    </button>
    <span className="px-4 py-2">{currentPage}</span>
    <button
      onClick={() => onPageChange(currentPage + 1)}
      className="px-4 py-2 bg-gray-300 rounded mx-2"
    >
      Next
    </button>
  </div>
);

export default Pagination;
