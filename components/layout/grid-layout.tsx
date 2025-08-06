type GridLayoutProps = {
  className?: string;
  size?: "small" | "large";
  children: React.ReactNode;
};

export function GridLayout({
  className = "",
  children,
  size = "small",
}: GridLayoutProps) {
  const gridClassName =
    "large" === size
      ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6";
  return (
    <div className={`grid gap-2 ${gridClassName} ${className}`}>{children}</div>
  );
}
