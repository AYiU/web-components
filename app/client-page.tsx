"use client";

import { LoadingButton } from "@/components/button/loading-button";
import { LinkListGroup } from "@/components/link-list-group/link-list-group";
import { MiCard } from "@/components/mi-ui/mi-card";
import { MiInput } from "@/components/mi-ui/mi-input";

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

      <MiCard image="/images/dummy.png" title="Card Title" footer={<div>Footer Content</div>}>
        Content
      </MiCard>

      <MiInput name="input" placeholder="Enter text here" />

      <LinkListGroup items={[{ title: "Item Title", url: "/item-link" }]} />
    </>
  );
}
