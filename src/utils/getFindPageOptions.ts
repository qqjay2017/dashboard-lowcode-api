import { PaginationDto } from 'src/designer/dto/pagination.dto';
import { DEFAULT_PAGE_SIZE } from './constants';

export const getFindPageOptions = (pageParam: PaginationDto) => {
  const pageSize = pageParam.pageSize ?? DEFAULT_PAGE_SIZE;
  const pageNum = pageParam.pageNum || 1;
  return {
    skip: (pageNum - 1) * pageSize,
    take: pageSize,
  };
};
