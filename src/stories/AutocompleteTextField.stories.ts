import type { Meta, StoryObj } from "@storybook/react";

import AutocompleteTextField from "../components/AutocompleteTextField/AutocompleteTextField";

const meta: Meta<typeof AutocompleteTextField> = {
  title: "Example/AutocompleteTextField",
  component: AutocompleteTextField,
  tags: ["autodocs"],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export default meta;

type Story = StoryObj<typeof AutocompleteTextField>;

export const Test: Story = {
  args: {
    spacer: " ",
    width: 200,
    trigger: ["({{", "@"],
    options: {
      "@": ["CVV", "CARD", "PII"],
      "({{": ["CLASSIFIER", "CLASSIFIER2"],
    },
  },
};
