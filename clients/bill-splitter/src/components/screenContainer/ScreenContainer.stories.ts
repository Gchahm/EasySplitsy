import type { Meta, StoryObj } from "@storybook/react";
import { ScreenContainer } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/ScreenContainer",
  component: ScreenContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { children: "ScreenContainer" },
} satisfies Meta<typeof ScreenContainer>;

export default meta;
type Story2 = StoryObj<typeof meta>;

export const Active: Story2 = {
  args: {},
};
