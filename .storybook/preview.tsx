import React from "react";
import type { Preview } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import { ThemeProvider } from "../src/theme/ThemeProvider";
import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },

  decorators: [
    (Story, context) => (
      <ThemeProvider>
        {context.parameters.layout === "fullscreen" ? (
          <Story />
        ) : (
          <div style={{ padding: "2rem" }}>
            <Story />
          </div>
        )}
      </ThemeProvider>
    ),
  ],
};

export default preview;
