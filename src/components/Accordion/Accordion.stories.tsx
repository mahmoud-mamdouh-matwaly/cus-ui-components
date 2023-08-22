import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Accordion } from '.';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    title: {
      control: { type: 'string' },
    },
    className: {
      control: { type: 'string' },
    },

    testId: {
      control: { type: 'string' },
    },
  },
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = args => <Accordion {...args} />;

export const defaultAccordion = Template.bind({});
defaultAccordion.args = {
  title: 'title',
  children: (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa distinctio sed quia dolor, repellendus culpa
      voluptates? Optio sapiente eum repellendus quasi, quae nihil iure, similique cum recusandae corporis maxime totam?
    </p>
  ),
};
