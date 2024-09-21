export interface PaginationDto<T> {
  results: T[];
  count: number;
  next?: string;
  previous?: string;
}

export interface PaginationQueryDto {
  page?: number;
  limit?: number;
}
