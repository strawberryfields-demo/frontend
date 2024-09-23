import { useState } from "react";

type UsePaginationOptions = {
  initPage: number;
  minPage: number;
  maxPage?: number;
  visiblePageCount: 1 | 3 | 5 | 7 | 9;
};

export const usePagination = ({ initPage, minPage, maxPage, visiblePageCount }: UsePaginationOptions) => {
  const [currentPage, setCurrentPage] = useState(initPage);
  const onPageChange = (page: number) => {
    if (isAvailablePage(page)) {
      setCurrentPage(page);
    }
  };

  const getShowPageList = () => {
    const showPageList = [minPage];

    const startPage = currentPage - Math.floor(visiblePageCount / 2);

    for (let i = 0; i < visiblePageCount; i++) {
      const page = startPage + i;
      if (isAvailablePage(page)) {
        showPageList.push(page);
      }
    }

    maxPage && showPageList.push(maxPage);

    return [...new Set(showPageList)];
  };

  const isAvailablePage = (page: number) => {
    if (page < minPage || (maxPage && page > maxPage)) {
      return false;
    }
    return true;
  };

  return {
    minPage,
    maxPage,
    currentPage,
    onPageChange,
    getShowPageList,
  };
};
