import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DatePicker } from '.';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = args => <DatePicker {...args} />;

export const datePicker = Template.bind({});
datePicker.args = {
  dateRange: {
    from: '2022-03-01',
    to: '2022-04-02',
  },
};
