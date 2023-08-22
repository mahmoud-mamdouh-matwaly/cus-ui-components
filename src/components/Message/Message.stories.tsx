import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Message } from '.';

export default {
  title: 'Components/Message',
  component: Message,
  argTypes: {},
} as ComponentMeta<typeof Message>;

const Template: ComponentStory<typeof Message> = args => <Message {...args} />;

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

export const title = Template.bind({});
title.args = {
  message: 'Error Description Error Description Error Description Error Description',
  type: 'error',
  title: 'title',
};
