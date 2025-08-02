import { Input } from "../ui/input";

type MiInputProps = {
  name: string;
  value?: string;
  // biome-ignore lint/suspicious/noExplicitAny: *
  onChange?: any;
  type?: string;
  // biome-ignore lint/suspicious/noExplicitAny: *
  ref?: any;
  defaultValue?: string;
  placeholder?: string;
  ariaDescribedby?: string;
};

export function MiInput(props: MiInputProps) {
  return <Input {...props} />;
}
