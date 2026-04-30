import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { useState } from 'react';
import { Button } from '../Button/Button';

const meta: Meta<typeof Modal> = {
    title: 'Components/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg', 'xl', 'full'],
        },
    },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
    render: (args) => {
        const [open, setOpen] = useState(false);
        return (
            <>
                <Button onClick={() => setOpen(true)}>Open Modal</Button>
                <Modal {...args} open={open} onClose={() => setOpen(false)} size="md">
                    <div style={{ padding: '2rem', background: 'var(--it-color-background, white)', borderRadius: '8px' }}>
                        <h2>Modal Content</h2>
                        <p>This is a basic modal.</p>
                        <Button onClick={() => setOpen(false)}>Close</Button>
                    </div>
                </Modal>
            </>
        );
    },
};
