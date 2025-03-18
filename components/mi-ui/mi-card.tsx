import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
type MiCardProps = {
  title?: string;
  className?: string;
  children: React.ReactNode;
};

export function MiCard({ title, className, children }: MiCardProps) {
  return (
    <Card className={className}>
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
    </Card>
  );
}
