import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const ShoppingCart = () => {
  const [show, setShow] = useState(false);
  const [items, setItems] = useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button data-test='cart-button' className='icon-button' onClick={handleShow}>
        <i className='icon-shopping-cart-icon cart-icon' />
        <div className='badge'>
          <div data-test='items-count' className='count'>{ items.length || 0 }</div>
        </div>
      </button>

      <Modal
        size='md'
        show={show}
        onHide={handleClose}
        dialogClassName='cart-modal'
      >
        <Modal.Header closeButton>
          <i className='icon-shopping-cart-icon cart-header'></i>
        </Modal.Header>
        <Modal.Body>
          <div className='cart-inner' data-test='modal-body'>
            <h5>Your cart is empty</h5>
            <p>Add items from a restaurant or store to start a new cart</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose} className='primary-btn'>
            Start shopping
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ShoppingCart;
