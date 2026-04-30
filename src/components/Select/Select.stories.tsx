import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
    title: 'Components/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        error: { control: 'boolean' },
        fullWidth: { control: 'boolean' },
        disabled: { control: 'boolean' },
    },
    args: {
        size: 'md',
        options: [
            { value: 'us', label: 'United States' },
            { value: 'ca', label: 'Canada' },
            { value: 'uk', label: 'United Kingdom' },
        ],
        placeholder: 'Select a country',
    },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const WithLabel: Story = {
    args: {
        label: 'Country',
    },
};

export const WithError: Story = {
    args: {
        label: 'Country',
        errorText: 'Please select a country',
    },
};
