import React from 'react';

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

  return (
    <div className="pagination">
      <button
        className="pagination-button-next"
        onClick={() => handlePageChange(1)}
      >
        Première
      </button>

{/*  A modifi si on clique sur suivant ou precedent il le fait alors qu'il est a 0 */}
      <button
        className="pagination-button-next"
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Précédent
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
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Suivant
      </button>

      <button
        className="pagination-button-next"
        onClick={() => handlePageChange(totalPages)}
      >
        Dernière
      </button>
    </div>
  );
};

export default PaginationNumber;
