import type { MouseEventHandler } from "react";

export type MouseOnClickEvent = MouseEventHandler<HTMLButtonElement>;

export type loadingState = "" | "loading" | "error" | "done";
