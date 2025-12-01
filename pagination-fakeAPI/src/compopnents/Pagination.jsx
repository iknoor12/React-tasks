import React from 'react';

function Pagination({ currentPage, totalPages, setCurrentPage }) {
  
  // Step 1: Create array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
        
      <button 
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Prev
      </button>

      {pageNumbers.map((num) => (
        <button
          key={num}
          onClick={() => setCurrentPage(num)}
          className={num === currentPage ? "active" : ""}
        >
          {num}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>

    </div>
  );
}

export default Pagination;
