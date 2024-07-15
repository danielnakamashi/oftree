import { Select, NumberInput } from "@mantine/core";
import { useFormContext } from "../formContext";

export function Duration() {
  const form = useFormContext();
  const { duration } = form.getValues();

  return (
    <>
      <Select
        label="Duration"
        data={[
          { value: "neverEnds", label: "Never Ends" },
          { value: "customize", label: "Customize" },
        ]}
        {...form.getInputProps("duration")}
      />
      {duration === "customize" && (
        <NumberInput
          label="Billing cycles"
          min={1}
          step={1}
          {...form.getInputProps("billingCycles")}
        />
      )}
    </>
  );
}
