import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';

const meta: Meta<typeof Tooltip> = {
    title: 'Components/Tooltip',
    component: Tooltip,
    tags: ['autodocs'],
    argTypes: {
        placement: {
            control: 'select',
            options: ['top', 'bottom', 'left', 'right'],
        },
        disabled: { control: 'boolean' },
    },
    args: {
        content: 'This is a tooltip',
        placement: 'top',
    },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
    render: (args) => (
        <div style={{ padding: '3rem', display: 'flex', justifyContent: 'center' }}>
            <Tooltip {...args}>
                <Button>Hover me</Button>
            </Tooltip>
        </div>
    ),
};
