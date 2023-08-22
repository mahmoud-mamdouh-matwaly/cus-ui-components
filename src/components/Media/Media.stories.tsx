import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Media } from '.';
import DefaultImg from '../../img/kingdom-7.png';

export default {
  title: 'Components/Media',
  component: Media,
  argTypes: {},
} as ComponentMeta<typeof Media>;

const Template: ComponentStory<typeof Media> = args => <Media {...args} />;

export const avatar = Template.bind({});
avatar.args = {
  title: 'name',
  subTitle: 'sub title',
};

export const link = Template.bind({});
link.args = {
  link: 'https://faturab2b.com/',
  avatar: DefaultImg,
};

export const vertical = Template.bind({});
vertical.args = {
  vertical: true,
  link: 'https://faturab2b.com/',
  avatar: DefaultImg,
  title: 'mahmoud mamdouh',
  subTitle: 'front end developer',
};
