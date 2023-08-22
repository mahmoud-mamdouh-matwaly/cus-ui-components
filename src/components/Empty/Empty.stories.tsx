import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Empty } from '.';

export default {
  title: 'Components/Empty',
  component: Empty,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Empty>;

const Template: ComponentStory<typeof Empty> = args => <Empty {...args} />;

export const empty = Template.bind({});
empty.args = {};

export const message = Template.bind({});
message.args = {
  message: 'no data',
};

export const customElement = Template.bind({});
customElement.args = {
  children: <p>custom element</p>,
};
