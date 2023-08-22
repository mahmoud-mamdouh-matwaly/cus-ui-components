import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Chip } from '.';

export default {
  title: 'Components/Chip',
  component: Chip,
  argTypes: {},
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = args => <Chip {...args} />;

export const defaultChip = Template.bind({});
defaultChip.args = {
  name: 'chip',
};

export const chipWithClose = Template.bind({});
chipWithClose.args = {
  hasClose: true,
  name: 'chip with close',
};
