import React, { useState } from 'react';
import classNames from 'classnames';
import styles from '../styles/pagination.module.scss';

interface PaginationProps {
  page: number;
  totalPages: number;
  handlePagination: (page: number) => unknown;
}

const Pagination = ({
  page,
  totalPages,
  handlePagination,
}: PaginationProps) => {
  return (
    <div className={styles.pagination}>
      <div className={styles.paginationWrapper}>
        <button
          onClick={() => handlePagination(page - 1)}
          type="button"
          className={classNames([styles.pageItem, styles.sides].join(' '))}
        >
          &lt;
        </button>
        <button
          onClick={() => handlePagination(1)}
          type="button"
          className={classNames(styles.pageItem)}
        >
          {1}
        </button>
        <div className={styles.separator}>...</div>
        <button
          onClick={() => handlePagination(page - 1)}
          type="button"
          className={styles.pageItem}
        >
          {page - 1}
        </button>
        <button
          onClick={() => handlePagination(page)}
          type="button"
          className={[styles.pageItem, styles.active].join(' ')}
        >
          {page}
        </button>
        <button
          onClick={() => handlePagination(page + 1)}
          type="button"
          className={styles.pageItem}
        >
          {page + 1}
        </button>
        <div className={styles.separator}>...</div>
        <button
          onClick={() => handlePagination(totalPages)}
          type="button"
          className={classNames(styles.pageItem, {
            [styles.active]: page === totalPages,
          })}
        >
          {totalPages}
        </button>
        <button
          onClick={() => handlePagination(page + 1)}
          type="button"
          className={[styles.pageItem, styles.sides].join(' ')}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
