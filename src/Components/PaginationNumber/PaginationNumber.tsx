import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }

  const PaginationNumber: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {

    console.log(totalPages);
    

    if (totalPages <= 1) {
      return null
    }
    
    
    const handlePageChange = (page: number) => {
      onPageChange(page);
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Fait remonter la page en haut en douceur
    };
    
    return (
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`pagination-button ${currentPage === index + 1 ? "active" : ""}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    );
  };
  
export default PaginationNumber;