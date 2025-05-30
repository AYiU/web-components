import { paginationCal } from "./functions";
import { OptionalLink } from "../optional-link/optional-link";
import { NextArraw, PreviousArrow } from "./svg-icon";
import Link from "next/link";

type PaginationProps = {
  totalPage: number;
  currentPage: number;
};

export function Pagination({ totalPage, currentPage }: PaginationProps) {
  let previewLink: string | undefined = undefined;
  if (currentPage > 1) {
    previewLink = `?page=${currentPage - 1}`;
  }

  let nextLink: string | undefined = undefined;
  if (currentPage < totalPage) {
    nextLink = `?page=${currentPage + 1}`;
  }

  const r = paginationCal(currentPage, totalPage);

  return (
    <div className="flex items-center justify-between  px-4 py-3 sm:px-6">
      <nav
        className="mx-auto isolate inline-flex -space-x-px rounded-md shadow-sm"
        aria-label="Pagination"
      >
        <OptionalLink
          href={previewLink}
          className={`relative inline-flex items-center rounded-l-md px-2 py-2  ${
            previewLink ? "text-sky hover:bg-gray-50" : ""
          } ring-1 ring-inset ring-sky `}
        >
          <span className="sr-only">Previous</span>
          <PreviousArrow />
        </OptionalLink>
        {r.map((page, key) => {
          const url = new URL("", "https://dummy.com");
          url.searchParams.set("page", page.toString());
          const u = `?${url.searchParams.toString()}`;

          return (
            <Link
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={key}
              href={u}
              aria-current="page"
              className={`relative z-10 inline-flex items-center ${
                currentPage === page ? "bg-gray-400 text-gray-900 " : ""
              } px-4 py-2 text-sm ring-1 ring-inset ring-sky`}
            >
              {page}
            </Link>
          );
        })}

        <OptionalLink
          href={nextLink}
          className={`relative inline-flex items-center rounded-r-md px-2 py-2 ${
            nextLink ? "text-sky" : ""
          } ring-1 ring-inset ring-sky`}
        >
          <span className="sr-only">Next</span>
          <NextArraw />
        </OptionalLink>
      </nav>
    </div>
  );
}
