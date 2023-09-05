import React from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
const CommonModal = ({show,hide,title,body,btn1Value,btn1Click,btn2Value,btn2Click}) => {
  return (
    <Modal show={show} onHide={hide}>
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{body}</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={btn1Click}>
        {btn1Value}
      </Button>
      <Button variant="primary" onClick={btn2Click}>
       {btn2Value}
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default CommonModal
