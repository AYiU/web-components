import type React from "react";

import type { MouseEventHandler } from "react";

import classes from "./state-button.module.css";

export type loadingState = "" | "loading" | "error" | "done";

export type StateButtonType = {
  state: loadingState;
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  type?: "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

function LoadingChildren() {
  return (
    <>
      <div className={classes.loading}></div>
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
      className={className}
    >
      {"done" === state && <SavedChildren />}
      {"error" === state && <ErrorChildren />}
      {"loading" === state && <LoadingChildren />}
      {"" === state && children}
    </Component>
  );
}
