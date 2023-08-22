import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { usePagination } from '../../hooks/usePagination';
import './styles.css';
import { PaginationProps } from './Pagination.types';

const Pagination = (props: PaginationProps) => {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || (paginationRange && paginationRange?.length < 2)) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };
  let lastPage;
  if (paginationRange?.length) {
    lastPage = paginationRange[Number(paginationRange?.length) - 1];
  }
  return (
    <ul className="pagination-container pagination-bar">
      <li className={`pagination-item arrow ${currentPage === 1 ? 'disabled' : ''}`} onClick={onPrevious}>
        <div className="arrow left" />
      </li>
      {paginationRange?.map(pageNumber => {
        return (
          <li
            key={uuidv4()}
            className={`pagination-item ${pageNumber === currentPage && 'active'}`}
            onClick={() => onPageChange(+pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li className={`pagination-item arrow ${currentPage === lastPage ? 'disabled' : ''}`} onClick={onNext}>
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export { Pagination };
