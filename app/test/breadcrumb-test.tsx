import { Breadcrumb } from "@/components/breadcrumb/breadcrumb";

export function BreadcrumbTest() {
  const items = [
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

  return <Breadcrumb items={items} />;
}
