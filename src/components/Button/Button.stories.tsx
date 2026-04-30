import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

/**
 * Storybook Meta
 */
const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],

    /**
     * Controls in Storybook UI
     */
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'outlined', 'ghost'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        loading: {
            control: 'boolean',
        },
        fullWidth: {
            control: 'boolean',
        },
        startIcon: {
            control: false, // handled manually
        },
        endIcon: {
            control: false,
        },
        onClick: {
            action: 'clicked',
        },
    },

    /**
     * Default props
     */
    args: {
        children: 'Button',
        variant: 'primary',
        size: 'md',
        loading: false,
        fullWidth: false,
    },

    parameters: {
        layout: 'centered',
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

// ---

// # 🔹 Basic Stories

export const Default: Story = {};

export const Primary: Story = {
    args: {
        variant: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
    },
};

export const Outlined: Story = {
    args: {
        variant: 'outlined',
    },
};

export const Ghost: Story = {
    args: {
        variant: 'ghost',
    },
};

// ---

// # 🔹 Sizes

export const Small: Story = {
    args: {
        size: 'sm',
        children: 'Small Button',
    },
};

export const Medium: Story = {
    args: {
        size: 'md',
        children: 'Medium Button',
    },
};

export const Large: Story = {
    args: {
        size: 'lg',
        children: 'Large Button',
    },
};

// ---

// # 🔹 States

export const Loading: Story = {
    args: {
        loading: true,
        children: 'Loading...',
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        children: 'Disabled',
    },
};

export const FullWidth: Story = {
    args: {
        fullWidth: true,
        children: 'Full Width Button',
    },
};

// ---

// # 🔹 With Icons

const FakeIcon = () => <span style={{ fontWeight: 'bold' }}>★</span>;

export const WithStartIcon: Story = {
    args: {
        startIcon: <FakeIcon />,
        children: 'Start Icon',
    },
};

export const WithEndIcon: Story = {
    args: {
        endIcon: <FakeIcon />,
        children: 'End Icon',
    },
};

export const WithBothIcons: Story = {
    args: {
        startIcon: <FakeIcon />,
        endIcon: <FakeIcon />,
        children: 'Both Icons',
    },
};



// export const AllVariants: Story = {
//   render: () => (
//     <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
//       <Button variant="primary">Primary</Button>
//       <Button variant="secondary">Secondary</Button>
//       <Button variant="outlined">Outlined</Button>
//       <Button variant="ghost">Ghost</Button>
//     </div>
//   ),
// };

