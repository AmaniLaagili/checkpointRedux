import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { editTask } from "../../Actions";
import { useDispatch } from "react-redux";
function EditTask({ toDo_task }) {
    const [show, setShow] = useState(false);
    const [newEdit, setNewEdit] = useState(toDo_task.task);
    const dispatch = useDispatch();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handeleChange = (input) => {
        setNewEdit(input);
    };
    const handeleSubmit = () => {
        dispatch(editTask({ editTask: newEdit, id: toDo_task.id }));
        handleClose();
    };

    return (
        <>
            <Button variant="outline-dark" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Edit Task </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        type="text"
                        placeholder="Edit your task here..."
                        value={newEdit}
                        onChange={(e) => handeleChange(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handeleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditTask;
