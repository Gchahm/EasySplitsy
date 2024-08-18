import type { Meta, StoryObj } from "@storybook/react";
import { ParticipantReceiptHeader } from ".";
import { fn } from "@storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/ParticipantReceiptHeader",
  component: ParticipantReceiptHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ParticipantReceiptHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    participantName: "test",
    setParticipantName: fn,
    onAddParticipant: fn,
    onLeftClick: fn,
    onRightClick: fn,
  },
};
