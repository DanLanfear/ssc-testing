import TestForm from "./TestForm";
import {
  Button,
  Modal,
  ModalTitle,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "react-bootstrap";

function FormModal(props) {
  return (
    <Modal show={props.show} onHide={props.onHide} size="lg" centered>
      <ModalHeader closeButton>
        <ModalTitle>New Test</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <TestForm onSubmit={null} />
      </ModalBody>
      <ModalFooter>
        <Button onClick={props.onHide}>Close</Button>
      </ModalFooter>
    </Modal>
  );
}

export default FormModal;
