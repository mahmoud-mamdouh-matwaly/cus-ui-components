import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DropDown } from '.';

export default {
  title: 'Components/DropDown',
  component: DropDown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = args => <DropDown {...args} />;

export const dropDown = Template.bind({});
dropDown.args = {
  title: 'title',
  children: (
    <div>
      <a href="#">Analytics</a>
      <a href="#">Analytics 2</a>
    </div>
  ),
};
