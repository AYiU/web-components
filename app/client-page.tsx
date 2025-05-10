"use client";

import { LoadingButton } from "@/components/button/loading-button";
import { LinkListGroup } from "@/components/link-list-group/link-list-group";
import { MiCard } from "@/components/mi-ui/mi-card";
import { MiInput } from "@/components/mi-ui/mi-input";
import { Pagination } from "@/components/pagination/pagination";

export function ClientPage() {
  return (
    <>
      <LoadingButton
        onClick={async () => {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          console.log("done");
        }}
      >
        Click Me
      </LoadingButton>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 my-2 card-grid">
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
      </div>

      <MiInput name="input" placeholder="Enter text here" />

      <LinkListGroup items={[{ title: "Item Title", url: "/item-link" }]} />

      <Pagination currentPage={1} totalPage={100} />
    </>
  );
}
