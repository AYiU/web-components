import { Input } from "../ui/input";

type MiInputProps = {
  name: string;
  value?: string;
  onChange?: any;
  type?: string;
  ref?: any;
  defaultValue?: string;
  placeholder?: string;
  ariaDescribedby?: string;
};

export function MiInput(props: MiInputProps) {
  return <Input {...props} />;
}