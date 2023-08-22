import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '.';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'disabled'],
      control: { type: 'radio' },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    type: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary',
  text: 'click-me',
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0
     111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  ),
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  text: 'click-me',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  text: 'click-me',
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'click-me',
  variant: 'disabled',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  text: 'click-me',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  text: 'click-me',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  text: 'click-me',
};

export const className = Template.bind({});
className.args = {
  size: 'medium',
  text: 'click-me',
  className: 'bg-yellow-400 text-white border-transparent',
};

export const ReverseBtn = Template.bind({});
ReverseBtn.args = {
  variant: 'primary',
  text: 'click-me',
  reverse: true,
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0
     111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  ),
};
