import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from '.';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = args => <Select {...args} />;

export const select = Template.bind({});
select.args = {
  label: '',
  value: 'fruit',
  options: [
    { label: 'Fruit', value: 'fruit', disabled: false },
    { label: 'Vegetable', value: 'vegetable', disabled: false },
    { label: 'Meat', value: 'meat', disabled: true },
  ],
};

export const label = Template.bind({});
label.args = {
  label: 'label type: ',
  value: '',
  options: [
    { label: '--Please choose an option--', value: '' },
    { label: 'Fruit', value: 'fruit' },
    { label: 'Vegetable', value: 'vegetable' },
    { label: 'Meat', value: 'meat' },
  ],
};

export const disabled = Template.bind({});
disabled.args = {
  label: 'label type: ',
  value: '',
  disabled: true,
  options: [
    { label: '--Please choose an option--', value: '' },
    { label: 'Fruit', value: 'fruit' },
    { label: 'Vegetable', value: 'vegetable' },
    { label: 'Meat', value: 'meat' },
  ],
};
