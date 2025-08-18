"use client";

import { LoadingButton } from "@/components/button/loading-button";
import { type loadingState, StateButton } from "@/components/button/state-button";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function ButtonClientPage() {
  const [buttonState, setButtonState] = useState<loadingState>("");

  const onClick = ()=> {
    setButtonState("loading");
    setTimeout(()=>{
      setButtonState("done")
    }, 3000)
  }

  return (
    <>
      <StateButton state={buttonState} as={Button} onClick={onClick}>State Button</StateButton>
      <LoadingButton
        onClick={async () => {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          console.log("done");
        }}
      >
        Loading Button
      </LoadingButton>
    </>
  );
}
