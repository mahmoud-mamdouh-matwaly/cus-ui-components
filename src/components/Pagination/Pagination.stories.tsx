import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Pagination } from '.';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {},
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = args => <Pagination {...args} />;

export const pagination = Template.bind({});
pagination.args = {
  pageSize: 10,
  totalCount: 200,
  onPageChange: (page = 1) => page + 1,
  currentPage: 1,
};
