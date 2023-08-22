import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from '.';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const defaultModal = Template.bind({});
defaultModal.args = {
  title: 'title',
  isOpen: true,
  children: (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa distinctio sed quia dolor, repellendus culpa
      voluptates? Optio sapiente eum repellendus quasi, quae nihil iure, similique cum recusandae corporis maxime totam?
    </p>
  ),
};
