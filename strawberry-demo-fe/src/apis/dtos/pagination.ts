export interface PaginationDto<T> {
  items: T[];
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface PaginationQueryDto {
  page?: number;
  limit?: number;
  sort?: string;
  order?: "asc" | "desc";
}
