import { Modal } from 'react-bootstrap';
import Button from './Button';

/**
 * Shared Modal for various Messages.
 *
 * @param show            {boolean}   If the modal should be visible.
 * @param handleClose     {function}  Callback for close action.
 * @param showCloseButton {boolean}   If an additional close Button should be shown.
 * @param className       {string}    Optional className for modal dialog
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const SharedModal = ({
  size,
  show,
  handleClose,
  titleId,
  messageId,
  showCloseButton = true,
  children,
  className = false,
}) => {
  return (
    <Modal
      size={size || 'md'}
      show={show}
      onHide={handleClose}
      restoreFocus={false}
      centered
      contentClassName="dark-modal-content"
      className={className ? `text-white ${className}` : 'text-white'}
    >
      <Modal.Header
        closeButton
        closeVariant="white"
        style={{ borderBottomColor: '#333' }}
      ></Modal.Header>
      {showCloseButton && (
        <Modal.Footer className="border-0 pt-0">
          <Button onClick={handleClose} variant="secondary">
            {commands.close}
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default SharedModal;
