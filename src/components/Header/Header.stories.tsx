import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from '.';
import { Button } from '../Button';
import { DropDown } from '../dropDown';
import DefaultImg from '../../img/kingdom-7.png';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const header = Template.bind({});
header.args = {
  logo: DefaultImg,
  menu: (
    <>
      <a href="#">Analytics</a>
      <DropDown title="Analytics 1">
        <a href="#">test 1</a>
        <a href="#">test 2</a>
      </DropDown>
      <a href="#">Analytics 2</a>
      <a href="#">Analytics 3</a>

      <DropDown title="Analytics">
        <a href="#">test 3</a>
        <a href="#">test 4</a>
      </DropDown>
    </>
  ),
  navigationRight: <Button text="sign out" variant="primary" size="small" />,
};
