import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'influish-theme';
import React from 'react';



const preview: Preview = {
    decorators: [
        (Story) => (
            <ThemeProvider theme={{ mode: 'light' }}>
                <Story />
            </ThemeProvider>
        ),
    ],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;