import Proptypes from 'prop-types';
import ReactDOM from 'react-dom';

import { Overlay, Container, Footer } from "./styles";

import Button from '../Button';

export default function Modal({
  danger,
  visible,
  title,
  children,
  cancelLabel,
  confirmLabel,
  onCancel,
  onConfirm,
}) {
  if (!visible) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>{title}</h1>
        <div className="modal-body">
          {children}
        </div>
        <Footer>
          <button
            type="button"
            className="cancel-button"
            onClick={onCancel}
          >
            {cancelLabel}
          </button>
          <Button
            type="button"
            danger={danger}
            onClick={onConfirm}
          >
            {confirmLabel}
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  danger: Proptypes.bool,
  visible: Proptypes.bool.isRequired,
  title: Proptypes.string.isRequired,
  children: Proptypes.node.isRequired,
  cancelLabel: Proptypes.string,
  confirmLabel: Proptypes.string,
  onCancel: Proptypes.func.isRequired,
  onConfirm: Proptypes.func.isRequired,
};

Modal.defaultProps = {
  danger: false,
  cancelLabel: 'Cancelar',
  confirmLabel: 'Confirmar',
};
