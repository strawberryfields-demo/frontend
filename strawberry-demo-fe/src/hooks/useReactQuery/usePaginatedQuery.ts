import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { usePagination } from "../usePagination";
import _ from "lodash";
import { PaginationDto, PaginationQueryDto } from "@/apis/dtos/paginationDto";
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";

type usePaginatedQueryOptions<TData, TError> = {
  queryKey: UseQueryOptions<TData, TError>["queryKey"];
  apiCall: (query: PaginationQueryDto) => Promise<AxiosResponse<PaginationDto<TData>, any>>;
  options: {
    initPage: number;
    limit: number;
  };
};

export const usePaginatedQuery = <TData, TError>({
  queryKey,
  apiCall,
  options,
}: usePaginatedQueryOptions<TData, TError>) => {
  const [count, setCount] = useState(1);

  const pagination = usePagination({
    initPage: options.initPage,
    minPage: 1,
    maxPage: Math.ceil(count / options.limit),
    visiblePageCount: 5,
  });

  const query = useQuery({
    queryKey: [...queryKey, pagination.currentPage],
    queryFn: () =>
      apiCall({
        page: pagination.currentPage,
        limit: options.limit,
      }),
    placeholderData: (previousPageData) => previousPageData,
    staleTime: 1000 * 60 * 5,
  });

  const fetchNextPage = () => {
    fetchPage(pagination.currentPage + 1);
  };
  const fetchPreviousPage = () => {
    fetchPage(pagination.currentPage - 1);
  };
  const fetchPage = (page: number) => {
    pagination.onPageChange(page);
  };

  useEffect(() => {
    if (query.data?.data.count) {
      setCount(query.data?.data.count);
    }
  }, [query.data]);

  return {
    ..._.pick(query, ["data", "error", "isLoading", "isError", "isSuccess"]),
    fetchNextPage,
    fetchPreviousPage,
    fetchPage,
    pagination,
  };
};
