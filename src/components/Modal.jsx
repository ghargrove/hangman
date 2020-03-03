import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';
import styled from 'styled-components';

// const modalRoot = document.querySelector('#modal');

const ModalContainer = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  height: 100%;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
`;

const InnerModal = styled.div`
  background-color: white;
  padding: ${props => props.theme.spacing.medium};
`;

const Modal = ({ children }) => {
  const modalRoot = document.createElement('div');
  modalRoot.id = 'modal';

  useEffect(() => {
    document.body.appendChild(modalRoot);
    return () => modalRoot.parentNode.removeChild(modalRoot);
  }, [modalRoot]);

  return ReactDOM.createPortal(
    <ModalContainer>
      <InnerModal>{children}</InnerModal>
    </ModalContainer>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
