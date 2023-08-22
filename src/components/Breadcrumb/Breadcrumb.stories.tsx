import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Breadcrumb } from '.';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Breadcrumb>;

const items = [
  { to: '/', label: 'Home' },
  { to: '/users', label: 'Users' },
  { to: '/user/:id', label: 'user details' },
];

const Template: ComponentStory<typeof Breadcrumb> = args => <Breadcrumb {...args} />;

export const breadcrumb = Template.bind({});
breadcrumb.args = {
  children: items.map(({ to, label }) => (
    <a key={to} href={to}>
      {label}
    </a>
  )),
};
