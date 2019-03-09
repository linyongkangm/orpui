import Pagination from '$component/Pagination';
import * as React from 'react';

const Page = Pagination.Page;

export default function PaginationDemo() {
  const [page, setPage] = React.useState(new Page(1000, 10));
  return (
    <Pagination page={page} onChangePage={(old, will) => setPage(will)}>
      {Pagination.name}
    </Pagination>
  );
}
