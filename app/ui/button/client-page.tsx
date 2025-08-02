"use client";

import { LoadingButton } from "@/components/button/loading-button";

export function ButtonClientPage() {
  return (
    <LoadingButton
      onClick={async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("done");
      }}
    >
      Click Me
    </LoadingButton>
  );
}
