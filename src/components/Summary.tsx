import { Paper } from "@mantine/core";
import type { Form } from "../types";
import css from "../App.module.css";

function formatNumber(number: number, options?: Intl.NumberFormatOptions) {
  if (options?.style === "currency") {
    return new Intl.NumberFormat("en-US", {
      currency: "USD",
      ...options,
    }).format(number);
  }

  return new Intl.NumberFormat("en-US", {
    unitDisplay: "long",
    ...options,
  }).format(number);
}

function getCount(number: number, plural: string) {
  return `${formatNumber(number, { minimumFractionDigits: 0 })} ${
    number > 1 ? plural : plural.slice(0, -1)
  }`;
}

function getTotalAmountPaid(formValues: Form) {
  return formatNumber(
    formValues.initialPrice +
      formValues.billingCycles * formValues.recurrentPayment,
    { style: "currency" },
  );
}

function getSummary(formValues: Form) {
  let summary = `Your customer will be charged ${formatNumber(
    formValues.initialPrice,
    { style: "currency" },
  )} immediately`;

  if (formValues.trialPeriodOption && formValues.trialPeriodOption !== "none") {
    summary += ` for their ${formatNumber(formValues.trialPeriodNumber, {
      style: "unit",
      unit: formValues.trialPeriodOption,
    })} trial,`;
  }

  summary += ` and then ${formatNumber(formValues.recurrentPayment, {
    style: "currency",
  })} every ${formatNumber(formValues.billingFrequencyNumber, {
    style: "unit",
    unit: formValues.billingFrequencyOption,
  })}`;

  if (formValues.duration === "neverEnds") {
    summary += " until they cancel.";
  } else {
    summary += `, ${getCount(
      formValues.billingCycles,
      "times",
    )}. The total amount paid will be ${getTotalAmountPaid(formValues)}`;
  }

  return summary;
}

export function Summary({ form }: { form: Form }) {
  return (
    <Paper p="md" className={css.summary}>
      {getSummary(form)}
    </Paper>
  );
}
