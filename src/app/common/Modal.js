import { Modal, Button } from "react-bootstrap"


export const DeleteModal =(props) => {

  const handleClose = () => {
    props.setShow((old)=>!old)
}
    return (
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete {props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.message}</Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={props.handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
        )
}