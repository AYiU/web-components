"use client";

import type React from "react";

import { LoadingAnimation } from "../loading-animation/loading-animation";
import type { loadingState, MouseOnClickEvent } from "./types";

export type StateButtonType = {
  state: loadingState;
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  type?: "submit";
  onClick?: MouseOnClickEvent;
};

function LoadingChildren() {
  return (
    <>
      <LoadingAnimation />
      Saving
    </>
  );
}

function SavedChildren() {
  return "✔️ Saved";
}

function ErrorChildren() {
  return "🚨 Error";
}

export function StateButton({
  state,
  onClick,
  children,
  className,
  type,
  as,
}: StateButtonType) {
  const disabled = "loading" === state;

  const Component = as || "button";

  return (
    <Component
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`${className} h-10`}
    >
      {"done" === state && <SavedChildren />}
      {"error" === state && <ErrorChildren />}
      {"loading" === state && <LoadingChildren />}
      {"" === state && children}
    </Component>
  );
}
