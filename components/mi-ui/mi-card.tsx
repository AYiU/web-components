import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";

type MiCardProps = {
  title?: React.ReactNode;
  className?: string;
  footer?: React.ReactNode;
  children: React.ReactNode;
};

export function MiCard({ title, className, footer, children }: MiCardProps) {
  return (
    <Card className={`${className} flex flex-col`}>
      {title && (
        <CardHeader className="flex-initial">
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent className="flex-auto">{children}</CardContent>
      {footer && <CardFooter className="flex-initial">{footer}</CardFooter>}
    </Card>
  );
}

type MiCardBodyOnlyProps = {
  className?: string;
  children: React.ReactNode;
};

export function MiCardBodyOnly({
  className = "",
  children,
}: MiCardBodyOnlyProps) {
  return <Card className={className}>{children}</Card>;
}
