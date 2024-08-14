import type { Meta, StoryObj } from '@storybook/react';
import { ParticipantReceiptHeader } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Components/ParticipantReceiptHeader',
    component: ParticipantReceiptHeader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: { },
} satisfies Meta< typeof ParticipantReceiptHeader >;

export default meta;
type Story = StoryObj< typeof meta >;

export const Default: Story = {
    args: {
    },
};
