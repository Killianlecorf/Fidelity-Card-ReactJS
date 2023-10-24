import React from 'react';
import { LuChevronFirst, LuChevronLast, LuChevronLeft, LuChevronRight } from "react-icons/lu";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationNumber: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) {
    return null;
  }

  const handlePageChange = (page: number) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= Math.floor(maxVisiblePages / 2)) {
        for (let i = 1; i <= maxVisiblePages; i++) {
          pageNumbers.push(i);
        }
      } else if (currentPage >= totalPages - Math.floor(maxVisiblePages / 2)) {
        for (let i = totalPages - maxVisiblePages + 1; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        const start = currentPage - Math.floor(maxVisiblePages / 2);
        const end = currentPage + Math.floor(maxVisiblePages / 2);
        for (let i = start; i <= end; i++) {
          pageNumbers.push(i);
        }
      }
    }

    return pageNumbers;
  };

  const limitedPaginationNegative = () =>{
    if (currentPage > 1 ) {
      handlePageChange(currentPage - 1)
    }
  }
  

  const limitedPaginationPositive = () =>{
    if (currentPage < totalPages ) {
      handlePageChange(currentPage + 1)
    }
  }

  return (
    <div className="pagination">
      <button
        className="pagination-button-next"
        onClick={() => handlePageChange(1)}
      >
        <LuChevronFirst />
      </button>

      <button
        className="pagination-button-next"
        onClick={() => limitedPaginationNegative()}
      >
        <LuChevronLeft />
      </button>

      {generatePageNumbers().map((pageNumber: number) => (
        <button
          key={pageNumber}
          className={`pagination-button ${currentPage === pageNumber ? 'active' : ''}`}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}

      <button
        className="pagination-button-next"
        onClick={() =>limitedPaginationPositive()}
      >
        <LuChevronRight/>
      </button>

      <button
        className="pagination-button-next"
        onClick={() => handlePageChange(totalPages)}
      >
        <LuChevronLast/>
      </button>
    </div>
  );
};

export default PaginationNumber;
