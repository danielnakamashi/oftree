import { NumberInput, Select, Flex } from "@mantine/core";
import { useFormContext } from "../formContext";

export function TrialPeriod() {
  const form = useFormContext();
  const formValues = form.getValues();

  return (
    <NumberInput
      label="Trial Period"
      inputSize="5"
      min={1}
      step={1}
      disabled={formValues.trialPeriodOption === "none"}
      {...form.getInputProps("trialPeriodNumber")}
      inputContainer={(children) => (
        <Flex gap="md">
          {children}
          <Select
            data={[
              { value: "none", label: "None" },
              { value: "day", label: "Days" },
              { value: "week", label: "Weeks" },
              { value: "month", label: "Months" },
            ]}
            {...form.getInputProps("trialPeriodOption")}
          />
        </Flex>
      )}
    />
  );
}
