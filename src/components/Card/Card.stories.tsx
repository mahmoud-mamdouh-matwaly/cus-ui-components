import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from '.';
import DefaultImg from '../../img/kingdom-7.png';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card {...args} />;

export const card = Template.bind({});
card.args = {
  image: DefaultImg,
  title: 'title',
  subTitle: 'subTitle',
  meta: 'content info',
  content: `lorem, ipsum dolor sit amet consectetur adipisicing elit.
   Laboriosam quod quaerat harum 
    `,
};

export const vertical = Template.bind({});
vertical.args = {
  vertical: true,
  title: 'title',
  image: DefaultImg,
  subTitle: 'subTitle',
  meta: 'content info',
  content: `lorem, ipsum dolor sit amet consectetur adipisicing elit.
   Laboriosam quod quaerat harum 
    dolore debitis minus voluptatem possimus nulla 
    `,
};
