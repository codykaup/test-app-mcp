import React from 'react';


import { within } from '@storybook/testing-library';

import { expect } from '@storybook/jest';
import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const WithoutReducedMotion = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithoutReducedMotion.args = {
  primary: true,
  label: 'Button',
};
WithoutReducedMotion.parameters = {
  chromatic: {
    modes: {
      vp: {
        viewport: {
          width: 234,
          height: 345,
        },
      },
    },
  }
