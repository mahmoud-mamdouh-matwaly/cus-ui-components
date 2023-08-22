import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Switch } from '.';

export default {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {},
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = args => <Switch {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onToggle: () => true,
  isToggled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  onToggle: () => true,
  isToggled: false,
  disabled: true,
};
