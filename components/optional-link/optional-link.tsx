import Link from "next/link";

type OptionalLinkProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
};

export function OptionalLink({ href, children, ...props }: OptionalLinkProps) {
  if (href) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }
  if (Object.keys(props).length > 0) {
    return <span {...props}>{children}</span>;
  }
  return <>{children}</>;
}
