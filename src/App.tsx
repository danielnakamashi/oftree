import {
  MantineProvider,
  Center,
  Fieldset,
  Title,
  Button,
} from "@mantine/core";
import { useForm, FormProvider } from "./formContext";
import { InitialPrice } from "./components/InitialPrice";
import { RecurrencyFields } from "./components/RecurrencyFields";
import { TrialPeriod } from "./components/TrialPeriod";
import { Duration } from "./components/Duration";
import { Summary } from "./components/Summary";
import { initialValues, formValidation as validate } from "./formValidation";

import css from "./App.module.css";
import "@mantine/core/styles.css";

function App() {
  const form = useForm({
    initialValues,
    validate,
  });

  return (
    <MantineProvider>
      <Center>
        <FormProvider form={form}>
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <Fieldset className={css.fieldset}>
              <Title order={1} size="h3" className={css.title}>
                Set up your subscription
              </Title>
              <InitialPrice />
              <RecurrencyFields />
              <TrialPeriod />
              <Duration />
              <Summary form={form.getValues()} />
              <Button type="submit" className={css.button}>
                Submit
              </Button>
            </Fieldset>
          </form>
        </FormProvider>
      </Center>
    </MantineProvider>
  );
}

export default App;
