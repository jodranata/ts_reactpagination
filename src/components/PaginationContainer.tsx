import React, { useState } from 'react';
import Pagination from './Pagination';

const PaginationContainer = () => {
  const [page, setPage] = useState(1);
  const totalPage = 15;
  const handlePages = (updatepage: number) => setPage(updatepage);
  return (
    <div className="container">
      <Pagination
        page={page}
        totalPages={totalPage}
        handlePagination={handlePages}
      />
    </div>
  );
};

export default PaginationContainer;
