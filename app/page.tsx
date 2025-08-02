import { Breadcrumb } from "@/components/breadcrumb/breadcrumb";
import { uiList } from "@/config/menu-items";
import { LinkListGroup } from "@/exports";

export default function Home() {
  return (
    <>
      <Breadcrumb
        className="my-2"
        items={[{ title: "Home", url: "/", description: "Home" }]}
      />

      <LinkListGroup
        items={uiList.map((item) => ({
          title: item.charAt(0).toUpperCase() + item.slice(1),
          url: `/ui/${item}`,
        }))}
      />
    </>
  );
}
