import { Pagination } from "@/components/pagination/pagination";
import { PaginationClient } from "@/components/pagination/pagination-client";

export default function PaginationPage() {
  return (
    <>
      <Pagination totalPage={5} currentPage={1} />
      <hr className="my-4" />
      <PaginationClient totalPage={10} />
    </>
  );
}

export const metadata = {
  title: "Pagination",
};
