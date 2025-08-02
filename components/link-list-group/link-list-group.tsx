import Link from "next/link";
import type React from "react";
import type { ILink } from "../types";

type DefaultLinkAttr = {
  target?: "_blank";
  rel?: "noreferrer";
};

type LinkListGroupProps = {
  className?: string;
  items: ILink[];
  defaultLinkAttr?: DefaultLinkAttr;
};

export function LinkListGroup({
  className = "",
  items,
  defaultLinkAttr,
}: LinkListGroupProps) {
  return (
    <ul className={`px-0 border border-gray-200 rounded-lg ${className}`}>
      {items.map((item, key) => {
        return (
          <li
            // biome-ignore lint/suspicious/noArrayIndexKey: *
            key={key}
            className={`w-full px-4 py-2 border-b border-gray-200 ${
              0 === key ? "rounded-t-lg" : ""
            } ${key === items.length - 1 ? "rounded-b-lg" : ""}`}
          >
            <Link href={item.url} {...defaultLinkAttr}>
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

type ListGroupItemProps = {
  children: React.ReactNode;
};

export function ListGroupItem({ children }: ListGroupItemProps) {
  return <li className="list-group-item">{children}</li>;
}
