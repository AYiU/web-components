import { MiCard } from "@/components/mi-ui/mi-card";

export default function CardPage() {
  return (
    <>
      <MiCard
        image="/images/dummy.png"
        title="Card Title"
        footer={<div>Footer Content</div>}
      >
        Content
      </MiCard>
      <MiCard
        image="/images/dummy.png"
        title="Card Title"
        footer={<div>Footer Content</div>}
      >
        Content
      </MiCard>
      <a href="/">
        <MiCard image="/images/dummy.png" title="Card Title">
          Content
        </MiCard>
      </a>
    </>
  );
}

export const metadata = {
  title: "Card",
};
