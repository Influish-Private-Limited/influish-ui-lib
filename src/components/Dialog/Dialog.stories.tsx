import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from './Dialog';
import { useState } from 'react';
import { Button } from '../Button/Button';

const meta: Meta<typeof Dialog> = {
    title: 'Components/Dialog',
    component: Dialog,
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text' },
        open: { control: 'boolean' },
    },
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
    args: {
        open: false
    },

    render: (args) => {
        const [open, setOpen] = useState(false);
        return (
            <>
                <Button onClick={() => setOpen(true)}>Open Dialog</Button>
                <Dialog
                    {...args}
                    open={open}
                    onClose={() => setOpen(false)}
                    title="Delete item?"
                    actions={[
                        { label: 'Cancel', variant: 'ghost', onClick: () => setOpen(false) },
                        { label: 'Delete', variant: 'primary', onClick: () => setOpen(false) },
                    ]}
                >
                    <p>Are you sure you want to delete this item? This action cannot be undone.</p>
                </Dialog>
            </>
        );
    }
};
