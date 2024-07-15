import * as React from "react";
import { NumberInput, Select, Flex } from "@mantine/core";
import { useFormContext } from "../formContext";

const RECURRENT_PAYMENT_LABEL = {
  day: "Daily",
  week: "Weekly",
  month: "Monthly",
} as const;

export function RecurrencyFields() {
  const form = useFormContext();
  const setFieldValue = form.setFieldValue;
  const { initialPrice, billingFrequencyOption } = form.getValues();
  const prevInitialPrice = React.useRef<number>(initialPrice);

  const recurrentPaymentInputProps = form.getInputProps("recurrentPayment");
  const [isChanged, setIsChanged] = React.useState(false);

  React.useEffect(() => {
    if (!isChanged && prevInitialPrice.current !== initialPrice) {
      setFieldValue("recurrentPayment", initialPrice);
      prevInitialPrice.current = initialPrice;
    }
  }, [setFieldValue, initialPrice, isChanged]);

  return (
    <>
      <NumberInput
        label="Billing Frequency"
        inputSize="5"
        min={1}
        step={1}
        {...form.getInputProps("billingFrequencyNumber")}
        inputContainer={(children) => (
          <Flex gap="md">
            {children}
            <Select
              data={[
                { value: "day", label: "Days" },
                { value: "week", label: "Weeks" },
                { value: "month", label: "Months" },
              ]}
              {...form.getInputProps("billingFrequencyOption")}
            />
          </Flex>
        )}
      />
      <NumberInput
        label={`${
          RECURRENT_PAYMENT_LABEL[
            billingFrequencyOption as keyof typeof RECURRENT_PAYMENT_LABEL
          ]
        } Payment`}
        min={1}
        step={1}
        {...recurrentPaymentInputProps}
        onChange={(e) => {
          setIsChanged(true);
          recurrentPaymentInputProps.onChange(e);
        }}
      />
    </>
  );
}
