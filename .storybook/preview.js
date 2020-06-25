import { addDecorator } from "@storybook/react";
import { withTests } from "@storybook/addon-jest";

import results from "../.jest-test-results.json";

import "../src/style.scss";

addDecorator(
  withTests({
    results
  })
);
