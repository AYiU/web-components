import { Pagination } from "@/components/pagination/pagination";
import { PaginationClient } from "@/components/pagination/pagination-client";

type TestPageProps = {
  searchParams: Promise<{
    page: string;
  }>;
};

export default async function TestPage({ searchParams }: TestPageProps) {
  const { page } = await searchParams;

  const totalPage = 100;
  return (
    <div>
      <Pagination currentPage={Number(page)} totalPage={totalPage} />
      <PaginationClient totalPage={totalPage} />
    </div>
  );
}
