import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const modalRoot = document.querySelector('#modal');

const ModalContainer = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
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
  padding: 1rem;
`;

const Modal = ({ children }) => {
  const el = document.createElement('div');

  useEffect(() => {
    modalRoot.appendChild(el);
    return () => modalRoot.removeChild(el);
  }, [el]);

  return ReactDOM.createPortal(
    <ModalContainer>
      <InnerModal>{children}</InnerModal>
    </ModalContainer>,
    el
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
