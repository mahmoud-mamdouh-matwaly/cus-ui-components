import React from 'react';
import { Modal, Button, Message } from '../../index';

import DefaultImg from '../../img/kingdom-7.png';
import Default2x from '../../img/kingdom-7@2x.png';
import DefaultImg3x from '../../img/kingdom-7@3x.png';

import { ConfirmationProps } from './Confirmation.types';

const ConfirmationModal = ({
  isOpen,
  title,
  message,
  confirmButtonText = 'Confirm',
  cancelButtonText = 'Cancel',
  onCancel,
  onConfirm,
  img,
  loading,
  error,
  errorMessage,
}: ConfirmationProps) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onCancel} testId="confirmation-modal">
      <div className="font-sans flex flex-col bg-gray-100 rounded px-4 py-5 h-3/5">
        {error && <Message type="error" message={errorMessage || 'Opps! Looks like something went wrong..'} />}
        <picture data-testid="image" className="text-center mt-12 mr-auto ml-auto h-36 w-60">
          <source srcSet={img?.img3x || DefaultImg3x} media="(min-width: 1000px)" />
          <source srcSet={img?.img2x || Default2x} media="(min-width: 800px)" />
          <img srcSet={img?.img || DefaultImg} alt="…" src={img?.img} className="h-36 w-60 object-contain" />
        </picture>
        <h3 data-testid="title" className="font-bold text-base text-gray-600 my-4 mx-auto capitalize">
          {title}
        </h3>
        <p data-testid="message" className="text-base font-semibold text-center mx-auto mb-14 w-96 text-gray-600">
          {message}
        </p>
        <div className="flex justify-end">
          <Button
            testId="cancelBtn"
            onClick={onCancel}
            className="capitalize mr-6 py-2 px-4 font-bold"
            text={cancelButtonText}
          />
          <Button
            testId="confirmBtn"
            type="submit"
            disabled={loading}
            onClick={onConfirm}
            variant={loading ? 'disabled' : 'secondary'}
            className="capitalize py-2 px-4 font-bold"
            text={confirmButtonText}
          />
        </div>
      </div>
    </Modal>
  );
};

export { ConfirmationModal };
