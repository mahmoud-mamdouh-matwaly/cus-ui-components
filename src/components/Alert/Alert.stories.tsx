import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Alert } from '.';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = args => <Alert {...args} />;

export const error = Template.bind({});
error.args = {
  message: 'Error Description Error Description Error Description Error Description',
  type: 'error',
};

export const info = Template.bind({});
info.args = {
  message: 'Info Description Info Description Info Description Info Description',
  type: 'info',
};

export const success = Template.bind({});
success.args = {
  message: 'Success Description Success Description Success Description',
  type: 'success',
};

export const warning = Template.bind({});
warning.args = {
  message: 'Warning Description Warning Description Warning Description',
  type: 'warning',
};

export const custom = Template.bind({});

custom.args = {
  message: 'Warning Description Warning Description Warning Description',
  type: 'error',
  children: <p>custom element custom element</p>,
};
