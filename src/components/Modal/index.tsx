import React from 'react';
import ReactModal from 'react-modal';
import { ModalProps } from './Modal.types';
import XSvg from '../../img/x.svg';
import './styles.css';

const Modal = ({ className = '', onRequestClose, title, children, ...props }: ModalProps) => (
  <ReactModal
    portalClassName={className || 'modal__container'}
    className="content"
    overlayClassName="overlay"
    shouldCloseOnOverlayClick={false}
    onRequestClose={onRequestClose}
    ariaHideApp={false}
    {...props}
  >
    {title && (
      <div className="modal__header">
        <h3 className="modal__title" data-testid="title">
          {title}
        </h3>
        <img src={XSvg} data-testid="close-icon" className="modal__closeIcon" onClick={onRequestClose} />
      </div>
    )}
    <div className="modal__body">{children}</div>
  </ReactModal>
);
export { Modal };
