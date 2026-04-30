import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    framework: '@storybook/react-vite',

    stories: [
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
        '../src/**/*.stories.mdx',
    ],
    addons: [
        '@storybook/addon-essentials',   // actions, controls, docs, viewport
        '@storybook/addon-interactions', // play function support
        '@storybook/addon-a11y',         // accessibility checks
    ],

    docs: {
        autodocs: 'tag',
    },

    typescript: {
        reactDocgen: 'react-docgen-typescript',
    },
};

export default config;