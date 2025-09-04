"use client";

import { type ReactNode, useState } from "react";
import { Button } from "../ui/button";
import { StateButton } from "./state-button";
import type { loadingState, MouseOnClickEvent } from "./types";

export type LoadingButtonType = {
  className?: string;
  children: ReactNode;
  color?: string;
  onClick?: MouseOnClickEvent;
  loadingAnimate?: boolean;
};

export function LoadingButton({
  children: inChildren,
  onClick,
  loadingAnimate,
  ...restProps
}: LoadingButtonType) {
  const { props, state } = useLoadingButton(onClick);

  return (
    <StateButton {...restProps} {...props} state={state} as={Button}>
      {inChildren}
    </StateButton>
  );
}

function useLoadingButton(asyncOnClick?: MouseOnClickEvent) {
  const [state, setState] = useState<loadingState>("");

  const onButtonClick: MouseOnClickEvent = async (event) => {
    setState("loading");

    if (asyncOnClick) {
      try {
        await asyncOnClick(event);
      } catch (e: unknown) {
        console.log("error", e);
        setState("error");
      }
    }
    setState("done");
  };

  const props = {
    onClick: onButtonClick,
    disabled: state === "loading",
  };

  return { props, state };
}
