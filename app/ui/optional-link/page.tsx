import { OptionalLink } from "@/components/optional-link/optional-link";

export default function OptionalLinkPage() {
  return (
    <div>
      <p>
        <OptionalLink href="https://example.com">
          Click here to visit example.com
        </OptionalLink>
      </p>
      <p>
        <OptionalLink>This is just a span</OptionalLink>
      </p>
    </div>
  );
}

export const metadata = {
  title: "Optional Link",
};
