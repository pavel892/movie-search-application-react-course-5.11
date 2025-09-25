import MoviesList from '@/components/MoviesList';
import PaginationComponent from '@/components/Pagination';
import TabsComponent from '@/components/Tabs';
import { Suspense } from 'react';
import { Spin } from 'antd';

export default async function Home(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div style={{ fontFamily: 'var(--font-inter)' }}>
      <TabsComponent />
      <Suspense
        key={query + currentPage}
        fallback={
          <div className="flex justify-center mt-6 mb-6">
            <Spin />
          </div>
        }
      >
        <MoviesList currentPage={currentPage} query={query} />
      </Suspense>
      <PaginationComponent currentPage={currentPage} query={query} />
    </div>
  );
}
