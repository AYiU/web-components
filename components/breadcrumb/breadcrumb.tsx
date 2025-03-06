import React from "react";

import Link from "next/link";

import {
  Breadcrumb as XBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbList,
} from "../ui/breadcrumb";
import { IPageInfo } from "../types";

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
