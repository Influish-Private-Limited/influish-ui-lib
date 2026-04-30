import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
    title: 'Components/TextField',
    component: TextField,
    tags: ['autodocs'],
    argTypes: {
        inputSize: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        fullWidth: { control: 'boolean' },
        disabled: { control: 'boolean' },
    },
    args: {
        inputSize: 'md',
        label: 'Username',
        placeholder: 'Enter your username',
    },
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {};

export const WithHelperText: Story = {
    args: {
        helperText: 'Your username must be unique.',
    },
};

export const WithError: Story = {
    args: {
        errorText: 'Username is already taken.',
        defaultValue: 'john_doe',
    },
};
