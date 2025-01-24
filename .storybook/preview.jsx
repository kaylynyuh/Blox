/** @type { import('@storybook/react').Preview } */

import { ThemeProvider } from "../src/theme/ThemeProvider";
import BloxStyles from "../src/styles/BloxStyles";

const preview = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <BloxStyles />
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
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
