import TestForm from "./TestForm";
import { Modal, ModalTitle, ModalHeader, ModalBody } from "react-bootstrap";
// import { ReactDOM } from "react";

function FormModal(props) {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(ReactDOM.findDOMNode(this.refs.nameInput).value);
  //   return false;
  // };

  return (
    <Modal show={props.show} onHide={props.onHide} size="lg" centered>
      <ModalHeader closeButton>
        <ModalTitle>New Test</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <TestForm handleSubmit={props.handleSubmit} />
      </ModalBody>
    </Modal>
  );
}

export default FormModal;
