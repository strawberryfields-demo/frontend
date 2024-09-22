import { PaginationQueryDto } from "../dtos/paginationDto";

export const getPaginationQuery = ({ page, limit }: PaginationQueryDto) => {
  return new URLSearchParams({
    page: page || "1",
    limit: limit || "10",
  });
};
