import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageHeaders } from './PageHeaders';

export default {
  title: 'Layout/page-header',
  component: PageHeaders,
  argTypes: {},
} as ComponentMeta<typeof PageHeaders>;

const Template: ComponentStory<typeof PageHeaders> = args => <PageHeaders {...args} />;

export const pageHeaders = Template.bind({});
pageHeaders.args = {};
