import React, { PropTypes } from 'react';

export const ModalHeader = ({ onRequestClose }) => (
  <div className="modal__header">
    <button
      className="modal__btn-close"
      onClick={onRequestClose}
    >
      <i className="fa fa-times fa-lg"></i>
    </button>
  </div>
);

export const ModalFooter = ({ modalFooter }) => (
  <div className="modal__footer">
    {modalFooter}
  </div>
);

export const ModalBody = ({ children }) => (
  <div className="modal__body">
    {children}
  </div>
);

export class Modal extends React.Component {
  constructor() {
    super();

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  shouldComponentUpdate(prevProps) {
    // Prevent modal render when props not change
    return prevProps.isModalOpen !== this.props.isModalOpen;
  }

  componentDidUpdate() {
    const props = this.props;

    if (props.isModalOpen) {
      this.openModal();
    } else {
      this.closeModal();
    }
  }

  openModal() {
    document.body.style.overflowY = 'hidden';
    this.modal.style.display = 'block';

    // scroll modal content to top view
    this.modal.scrollTop = 0;
  }

  closeModal() {
    document.body.style.overflowY = '';
    window.setTimeout(() => {
      this.modal.style.display = '';
    }, 250);
  }

  render() {
    const {
      isModalOpen,
      onRequestClose,
      modalFooter,
      ...rest
    } = this.props;

    return (
      <div
        className={isModalOpen ? 'modal open' : 'modal'}
        // tabIndex="-1"
        role="dialog"
        ref={(ref) => this.modal = ref}
        onClick={onRequestClose}
      >
        <div
          className="modal__dialog"
          role="document"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal__content fade-in-down">

            <ModalHeader onRequestClose={onRequestClose} />

            <ModalBody {...rest} />

            {(modalFooter) && (<ModalFooter modalFooter={modalFooter} />)}

          </div>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  modalFooter: PropTypes.element,
};
