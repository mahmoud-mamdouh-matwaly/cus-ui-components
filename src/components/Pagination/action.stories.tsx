import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import useState from 'storybook-addon-state';

import { Pagination } from '.';

export default {
  title: 'Actions/Pagination',
  component: Pagination,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = args => {
  const [pageNum, setPageNum] = useState('clicks', 1);
  const handlePage = page => {
    setPageNum(page);
  };
  return (
    <Pagination
      {...args}
      onPageChange={pageNum => handlePage(pageNum)}
      pageSize={10}
      totalCount={200}
      currentPage={pageNum}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
