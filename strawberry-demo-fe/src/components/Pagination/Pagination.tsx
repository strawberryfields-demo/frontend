import {
  Pagination as DefaultPagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "../ui/pagination";

export type PaginationProps = {
  minPage: number;
  maxPage?: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  getShowPageList: () => number[];
  className?: string;
};

export default function Pagination({ currentPage, onPageChange, getShowPageList, className }: PaginationProps) {
  return (
    <DefaultPagination className={`w-full justify-between ${className}`}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => onPageChange(currentPage - 1)} />
        </PaginationItem>
      </PaginationContent>

      <PaginationContent>
        {getShowPageList().map((page) => {
          return (
            <PaginationItem key={page}>
              <PaginationLink
                className={currentPage === page ? "bg-primary text-white" : ""}
                onClick={() => onPageChange(page)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}
      </PaginationContent>

      <PaginationContent>
        <PaginationItem>
          <PaginationNext onClick={() => onPageChange(currentPage + 1)} />
        </PaginationItem>
      </PaginationContent>
    </DefaultPagination>
  );
}
