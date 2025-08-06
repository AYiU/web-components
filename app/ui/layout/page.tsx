import { GridLayout } from "@/components/layout/grid-layout";

export default function LayoutPage() {
  const dummy = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <GridLayout size="small">
        {dummy.map((item) => (
          <div key={item}>{item} </div>
        ))}
      </GridLayout>
      <GridLayout size="large">
        {dummy.map((item) => (
          <div key={item}>{item} </div>
        ))}
      </GridLayout>
      <hr className="my-4" />
    </>
  );
}

export const metadata = {
  title: "Pagination",
};
