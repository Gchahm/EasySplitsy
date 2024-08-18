import type { Meta, StoryObj } from "@storybook/react";
import { ReceiptFooter } from ".";
import { fn } from "@storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/ReceiptFooter",
  component: ReceiptFooter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ReceiptFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    billItems: {},
    onMoveToBillClick: fn,
    onMoveToParticipantClick: fn,
  },
};
