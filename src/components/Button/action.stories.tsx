import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import useState from 'storybook-addon-state';

import { Button } from '.';

export default {
  title: 'Actions/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'disabled'],
      control: { type: 'radio' },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    type: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => {
  const [count, set] = useState('clicks', 0);
  return (
    <div>
      <Button {...args} onClick={() => set(count + 1)} type="button" text="Click-me" />
      <div>{`I was clicked ${count} time(s) asdsad`}</div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
