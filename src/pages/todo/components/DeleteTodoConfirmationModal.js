import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteTodoConfirmationModal(props) {
  const { isShowModal, todoId, handleOkModal, handleCancelModal } = props;

  return (
    <>
      <Modal show={isShowModal} onHide={handleCancelModal}>
        <Modal.Header closeButton>
          <Modal.Title>Please confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure want to delete this todo?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleOkModal}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteTodoConfirmationModal;
