'use client';

import { Pagination } from 'antd';
import { useRouter } from 'next/navigation';

export default function PaginationComponent({ currentPage, query }: { currentPage: number; query: string }) {
  const router = useRouter();

  return (
    <Pagination
      defaultCurrent={1}
      total={50}
      current={currentPage}
      onChange={(page) => {
        const params = new URLSearchParams();
        params.set('page', String(page));
        if (query) {
          params.set('query', query);
        }
        router.push(`?${params.toString()}`);
      }}
      align="center"
      style={{ marginBottom: '20px' }}
    />
  );
}
