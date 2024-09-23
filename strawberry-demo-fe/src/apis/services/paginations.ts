import { PaginationQueryDto } from "../dtos/paginationDto";

export const getPaginationQuery = ({ page, limit }: PaginationQueryDto) => {
  return new URLSearchParams({
    page: page?.toString() || "1",
    limit: limit?.toString() || "10",
  });
};
