import type { Meta, StoryObj } from '@storybook/react';
import { Grid, GridItem, Container } from './Grid';

const meta: Meta<typeof Grid> = {
    title: 'Components/Grid',
    component: Grid,
    tags: ['autodocs'],
    argTypes: {
        columns: {
            control: { type: 'number', min: 1, max: 12 },
        },
        gap: {
            control: 'select',
            options: ['none', 'sm', 'md', 'lg', 'xl'],
        },
    },
    args: {
        columns: 12,
        gap: 'md',
    },
};

export default meta;

type Story = StoryObj<typeof Grid>;

const Box = ({ children, color = '#e0e0e0' }: { children: React.ReactNode, color?: string }) => (
    <div style={{ backgroundColor: color, padding: '1rem', textAlign: 'center', borderRadius: '4px' }}>
        {children}
    </div>
);

export const Default: Story = {
    render: (args) => (
        <Container>
            <Grid {...args}>
                <GridItem span={4}><Box color="#ffcdd2">Span 4</Box></GridItem>
                <GridItem span={4}><Box color="#c8e6c9">Span 4</Box></GridItem>
                <GridItem span={4}><Box color="#bbdefb">Span 4</Box></GridItem>
                <GridItem span={6}><Box color="#fff9c4">Span 6</Box></GridItem>
                <GridItem span={6}><Box color="#d1c4e9">Span 6</Box></GridItem>
                <GridItem span={12}><Box color="#cfd8dc">Span 12</Box></GridItem>
            </Grid>
        </Container>
    ),
};

export const Responsive: Story = {
    render: (args) => (
        <Container>
            <Grid {...args}>
                <GridItem span={12} spanMd={6} spanLg={4}><Box>12 / 6 / 4</Box></GridItem>
                <GridItem span={12} spanMd={6} spanLg={4}><Box>12 / 6 / 4</Box></GridItem>
                <GridItem span={12} spanMd={6} spanLg={4}><Box>12 / 6 / 4</Box></GridItem>
            </Grid>
        </Container>
    ),
};
