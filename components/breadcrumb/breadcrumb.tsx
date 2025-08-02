import Link from "next/link";
import React from "react";

import type { IPageInfo } from "../types";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  Breadcrumb as XBreadcrumb,
} from "../ui/breadcrumb";

type BreadcrumbsType = {
  className?: string;
  items: IPageInfo[];
};

export function Breadcrumb({ items, ...props }: BreadcrumbsType) {
  return (
    items.length > 0 && (
      <XBreadcrumb {...props}>
        <BreadcrumbList>
          {items.map((b, k) => {
            return (
              // biome-ignore lint/suspicious/noArrayIndexKey: *
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
