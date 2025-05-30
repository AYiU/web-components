import React from "react";

import Link from "next/link";

import {
  Breadcrumb as XBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbList,
} from "../ui/breadcrumb";
import type { IPageInfo } from "../types";

type BreadcrumbsType = {
  items: IPageInfo[];
};

export function Breadcrumb({ items }: BreadcrumbsType) {
  return (
    items.length > 0 && (
      <XBreadcrumb>
        <BreadcrumbList>
          {items.map((b, k) => {
            return (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <React.Fragment key={k}>
                {k > 0 && <BreadcrumbSeparator />}
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href={b.url}>{b.title}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </XBreadcrumb>
    )
  );
}
