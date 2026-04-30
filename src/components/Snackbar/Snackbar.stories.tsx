import type { Meta, StoryObj } from '@storybook/react';
import { SnackbarContainer } from './Snackbar';
import { Button } from '../Button/Button';
import { useState } from 'react';
import type { SnackbarMessage } from '../../hooks/useSnackbar';

const meta: Meta<typeof SnackbarContainer> = {
    title: 'Components/Snackbar',
    component: SnackbarContainer,
    tags: ['autodocs'],
    argTypes: {
        position: {
            control: 'select',
            options: ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'],
        },
        duration: {
            control: { type: 'number', min: 500, step: 500 },
            description: 'Auto-dismiss delay in ms. Per-message duration takes priority over this value.',
        },
    },
};

export default meta;

type Story = StoryObj<typeof SnackbarContainer>;

export const Default: Story = {
    render: (args) => {
        const [messages, setMessages] = useState<SnackbarMessage[]>([]);
        const addMessage = (severity: SnackbarMessage['severity']) => {
            const newMsg: SnackbarMessage = {
                id: Math.random().toString(),
                message: `This is a ${severity} message`,
                severity,
                duration: 3000,
            };
            setMessages((prev) => [...prev, newMsg]);
        };

        const dismiss = (id: string) => {
            setMessages((prev) => prev.filter((m) => m.id !== id));
        };

        return (
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button onClick={() => addMessage('success')}>Success</Button>
                <Button onClick={() => addMessage('error')}>Error</Button>
                <Button onClick={() => addMessage('info')}>Info</Button>
                <Button onClick={() => addMessage('warning')}>Warning</Button>
                <SnackbarContainer {...args} messages={messages} onDismiss={dismiss} />
            </div>
        );
    },
};
