export interface PaginationProps {
  siblingCount?: number;
  totalCount: number;
  onPageChange: (page: number) => void;
  pageSize: number;
  currentPage: number;
}
