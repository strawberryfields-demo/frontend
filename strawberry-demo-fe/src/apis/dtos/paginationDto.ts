export interface PaginationDto<T> {
  results: T[];
  count: number;
  next?: number;
  previous?: number;
}

export interface PaginationQueryDto {
  page?: number;
  limit?: number;
}
