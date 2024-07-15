import { NumberInput } from "@mantine/core";
import { useFormContext } from "../formContext";

export function InitialPrice() {
  const form = useFormContext();

  return (
    <NumberInput
      label="Initial Price"
      min={0}
      step={1}
      {...form.getInputProps("initialPrice")}
    />
  );
}
