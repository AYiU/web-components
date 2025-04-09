"use client";

import { useSearchParams } from "next/navigation";
import { Pagination } from "./pagination";

type PaginationProps = {
  totalPage: number;
};

export function PaginationClient({ totalPage }: PaginationProps) {
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  return <Pagination totalPage={totalPage} currentPage={currentPage} />;
}
