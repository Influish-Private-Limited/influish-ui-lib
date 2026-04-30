import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
    title: 'Components/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
    argTypes: {
        collapsed: { control: 'boolean' },
        width: { control: 'number' },
    },
    args: {
        width: 260,
    },
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

const items = [
    { key: 'dashboard', label: 'Dashboard' },
    { key: 'analytics', label: 'Analytics' },
    { key: 'settings', label: 'Settings' },
    { key: 'reports', label: 'Reports', badge: 'New' },
    { key: 'profile', label: 'Profile', disabled: false },
    { key: 'logout', label: 'Logout', disabled: true },
];

export const Default: Story = {
    args: {
        items,
        activeKey: 'dashboard',
        header: <div style={{ padding: '1rem', fontWeight: 'bold' }}>My App</div>,
        footer: <div style={{ padding: '1rem', fontSize: '0.8rem' }}>v1.0.0</div>,
    },
};

export const Collapsed: Story = {
    args: {
        ...Default.args,
        collapsed: true,
    },
};
