import { Suspense } from "react";
import { Pagination } from "@/components/pagination/pagination";
import { PaginationClient } from "@/components/pagination/pagination-client";

export default function PaginationPage() {
  return (
    <>
      <Pagination totalPage={5} currentPage={1} />
      <hr className="my-4" />
      <Suspense fallback="Loading...">
        <PaginationClient totalPage={10} />
      </Suspense>
    </>
  );
}

export const metadata = {
  title: "Pagination",
};
