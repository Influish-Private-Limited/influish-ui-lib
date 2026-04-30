import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        inputSize: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        error: { control: 'boolean' },
        fullWidth: { control: 'boolean' },
        disabled: { control: 'boolean' },
    },
    args: {
        inputSize: 'md',
        placeholder: 'Enter text here...',
    },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithError: Story = {
    args: {
        error: true,
        defaultValue: 'Invalid value',
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        defaultValue: 'Disabled input',
    },
};

export const WithAdornments: Story = {
    args: {
        startAdornment: <span>$</span>,
        endAdornment: <span>.00</span>,
        placeholder: 'Amount',
    },
};
