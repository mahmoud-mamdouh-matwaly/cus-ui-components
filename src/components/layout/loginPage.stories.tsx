import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LoginPage } from './loginPage';

export default {
  title: 'Layout/login-page',
  component: LoginPage,
  argTypes: {},
} as ComponentMeta<typeof LoginPage>;

const Template: ComponentStory<typeof LoginPage> = args => <LoginPage {...args} />;

export const loginPage = Template.bind({});
loginPage.args = {};
