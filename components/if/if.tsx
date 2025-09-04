import type React from "react";

interface IfProps {
  condition: boolean;
  children: React.ReactNode;
}

export const If: React.FC<IfProps> = ({ condition, children }) => {
  return condition ? children : null;
};

If.displayName = "If component";
