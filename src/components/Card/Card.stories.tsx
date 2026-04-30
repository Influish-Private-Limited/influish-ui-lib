import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardBody, CardFooter } from './Card';
import { Button } from '../Button/Button';

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {
        elevation: {
            control: 'select',
            options: ['flat', 'sm', 'md', 'lg'],
        },
        variant: {                          // ← add this
            control: 'select',
            options: ['elevated', 'outlined', 'filled', 'ghost'],
        },
        radius: {                           // ← add this
            control: 'select',
            options: ['none', 'sm', 'md', 'lg', 'xl', '2xl'],
        },
        hoverable: { control: 'boolean' },
        bordered: { control: 'boolean' },   // ← add this
        noPadding: { control: 'boolean' },
        fullWidth: { control: 'boolean' },
        clickable: { control: 'boolean' },  // ← add this
    },
    args: {
        elevation: 'md',
        variant: 'elevated',
        radius: 'xl',
        hoverable: false,
        bordered: false,
        noPadding: false,
        fullWidth: false,
        clickable: false,
    },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
    render: (args) => (
        <Card {...args} style={{ maxWidth: '400px' }}>
            <CardHeader title="Card Title" subheader="Card subheader text" />
            <CardBody>
                <p style={{ margin: 0 }}>
                    This is the main content of the card. You can place any text, image, or other React components here.
                </p>
            </CardBody>
            <CardFooter>
                <Button variant="primary">Action</Button>
            </CardFooter>
        </Card>
    ),
};

export const Hoverable: Story = {
    render: (args) => (
        <Card {...args} hoverable style={{ maxWidth: '400px' }}>
            <CardHeader title="Hover Me!" />
            <CardBody>This card has a hover effect enabled.</CardBody>
        </Card>
    ),
};

export const Flat: Story = {
    render: (args) => (
        <Card {...args} elevation="flat" style={{ maxWidth: '400px', border: '1px solid #eee' }}>
            <CardHeader title="Flat Card" />
            <CardBody>This card has no elevation and uses a border instead.</CardBody>
        </Card>
    ),
};
