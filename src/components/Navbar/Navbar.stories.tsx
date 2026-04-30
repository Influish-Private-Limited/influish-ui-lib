import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import { Button } from '../Button/Button';

const meta: Meta<typeof Navbar> = {
    title: 'Components/Navbar',
    component: Navbar,
    tags: ['autodocs'],
    argTypes: {
        sticky: { control: 'boolean' },
        bordered: { control: 'boolean' },
        maxWidth: { control: 'text' },
    },
    args: {
        bordered: true,
        sticky: false,
    },
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
    args: {
        children: (
            <>
                <Navbar.Brand href="/">InfluishTheme</Navbar.Brand>
                <Navbar.Nav>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </Navbar.Nav>
                <Navbar.End>
                    <Button variant="ghost" size="sm">Log in</Button>
                    <Button variant="primary" size="sm">Get Started</Button>
                </Navbar.End>
            </>
        ),
    },
};
