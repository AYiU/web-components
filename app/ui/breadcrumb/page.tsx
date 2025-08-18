import { Breadcrumb as MiBreadcrumb } from "@/components/breadcrumb/breadcrumb";
import type { IPageInfo } from "@/components/types";

export default function Breadcrumb() {
  const items: IPageInfo[] = [
    {
      url: "/test",
      title: "Test",
      description: "Test description",
    },
    {
      url: "/test",
      title: "Test - 2",
      description: "Test description",
    },
  ];

  return <MiBreadcrumb items={items} />;
}
