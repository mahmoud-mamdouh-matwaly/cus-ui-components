import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import useState from 'storybook-addon-state';

import { Switch } from '.';

export default {
  title: 'Actions/Switch',
  component: Switch,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    isToggled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = args => {
  const [toggle, setToggle] = useState('clicks', false);

  return <Switch {...args} onToggle={() => setToggle(!toggle)} isToggled={toggle} />;
};

export const Default = Template.bind({});
Default.args = {};
