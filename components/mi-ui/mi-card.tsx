import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import Image from "next/image";

type MiCardProps = {
  image?: string;
  title?: React.ReactNode;
  className?: string;
  footer?: React.ReactNode;
  children: React.ReactNode;
};

export function MiCard({
  image,
  title,
  className,
  footer,
  children,
}: MiCardProps) {
  return (
    <Card className={`${className} flex flex-col`}>
      {image && (
        <Image
          src={image}
          alt="Card Image"
          objectFit="cover"
          width={600}
          height={400}
          className="w-full rounded-t-xl object-cover"
        />
      )}
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
