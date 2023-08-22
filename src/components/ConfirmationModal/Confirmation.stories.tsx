import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ConfirmationModal } from '.';

export default {
  title: 'Components/ConfirmationModal',
  component: ConfirmationModal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ConfirmationModal>;

const Template: ComponentStory<typeof ConfirmationModal> = args => <ConfirmationModal {...args} />;

export const defaultConfirmationModal = Template.bind({});
defaultConfirmationModal.args = {
  title: 'title',
  isOpen: true,
  message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa distinctio sed quia dolor, repellendus culpa
  voluptates? Optio sapiente eum repellendus quasi, quae nihil iure, similique cum recusandae corporis maxime totam?`,
};

export const loading = Template.bind({});
loading.args = {
  title: 'title',
  isOpen: true,
  loading: true,
  message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa distinctio sed quia dolor, repellendus culpa
  voluptates? Optio sapiente eum repellendus quasi, quae nihil iure, similique cum recusandae corporis maxime totam?`,
};

export const modalError = Template.bind({});
modalError.args = {
  title: 'title',
  isOpen: true,
  error: true,
  message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa distinctio sed quia dolor, repellendus culpa
  voluptates? Optio sapiente eum repellendus quasi, quae nihil iure, similique cum recusandae corporis maxime totam?`,
};
