import { createFormContext } from "@mantine/form";
import type { Form } from "./types";

const [FormProvider, useFormContext, useForm] = createFormContext<Form>();

export { FormProvider, useFormContext, useForm };
