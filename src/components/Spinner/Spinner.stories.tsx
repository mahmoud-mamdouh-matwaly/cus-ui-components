import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Spinner } from '.';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {},
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = args => <Spinner {...args} />;

export const defaultSpinner = Template.bind({});
defaultSpinner.args = {};

export const spinnerWithProps = Template.bind({});
spinnerWithProps.args = {
  bottom: 'bottom-0',
  left: 'left-0',
};
