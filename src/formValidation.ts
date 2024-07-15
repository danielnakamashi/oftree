import type { Form } from "./types";

export const initialValues = {
  initialPrice: 0,
  billingFrequencyNumber: 0,
  billingFrequencyOption: "day",
  recurrentPayment: 0,
  trialPeriodNumber: 0,
  trialPeriodOption: "day",
  duration: "neverEnds",
  billingCycles: 0,
};

export const formValidation = {
  billingFrequencyNumber: (value: number) => {
    if (value === 0) {
      return "Required";
    }

    if (value % 1 !== 0) {
      return "Only integer value is allowed";
    }

    return null;
  },
  billingFrequencyOption: (value: string) =>
    ["day", "month", "week"].includes(value) ? null : `Invalid option ${value}`,
  recurrentPayment: (value: number) => {
    if (value === 0) {
      return "Required";
    }

    if (value % 1 !== 0) {
      return "Only integer value is allowed";
    }

    return null;
  },
  trialPeriodNumber: (value: number, values: Form) => {
    if (values.trialPeriodOption === "none") {
      return null;
    }

    if (value === 0) {
      return "Required";
    }

    if (value % 1 !== 0) {
      return "Only integer value is allowed";
    }

    return null;
  },
  trialPeriodOption: (value: string) =>
    ["none", "day", "week", "month"].includes(value)
      ? null
      : `Invalid option ${value}`,
  duration: (value: string) =>
    ["neverEnds", "customize"].includes(value)
      ? null
      : `Invalid option ${value}`,
  billingCycles: (value: number, values: Form) => {
    if (values.duration === "neverEnds") {
      return null;
    }

    if (value === 0) {
      return "Required";
    }

    if (value % 1 !== 0) {
      return "Only integer value is allowed";
    }

    return null;
  },
};
