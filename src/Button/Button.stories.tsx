import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Input",
  component: Button,
};

// eslint-disable-next-line import/no-default-export
export default meta;

type Story = StoryObj<typeof Button>;

export const DefaultInput: Story = {
  render: () => <Button>sample</Button>,
};
