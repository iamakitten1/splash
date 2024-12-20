import React from 'react';

interface Props {
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ currentPage, onPageChange }) => (
  <div className="flex justify-center items-center mt-6 space-x-4">
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
    >
      Prev
    </button>
    <span className="text-lg font-semibold text-gray-700">{currentPage}</span>
    <button
      onClick={() => onPageChange(currentPage + 1)}
      className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all"
    >
      Next
    </button>
  </div>
);

export default Pagination;
