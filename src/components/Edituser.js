import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { adduser, edituser } from '../Redux/Action';
function Edituser({user}) {
    const [show, setShow] = useState(false);
    const [name, setname] = useState(user.name)
    const [email, setemail] = useState(user.email)
    const [image, setimage] = useState(user.image)
    const [gender, setgender] = useState(user.gender)
    const [password, setpassword] = useState(user.password)
    const dispatch=useDispatch()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handelsubmit=()=> {
    const data={name,email,password,gender,image}
    dispatch(edituser(user._id,data))
    handleClose()
    }
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Edit user      </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Full name</Form.Label>
                            <Form.Control
onChange={(event)=>setname(event.target.value)}
                                type="text"
                                placeholder="firstname and lastname"
                                autoFocus
                                defaultValue={user.name}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
onChange={(event)=>setemail(event.target.value)}
                                type="email"

                                placeholder="name@example.com"
                                autoFocus
                                defaultValue={user.email}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                            onChange={(event)=>setpassword(event.target.value)}
                                type="password"
                                placeholder="***"
                                autoFocus
                                defaultValue={user.password}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Picture</Form.Label>
                            <Form.Control
                            onChange={(event)=>setimage(event.target.value)}
                                type="text"
                                placeholder="link of your picture"
                                autoFocus
                                defaultValue={user.image}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Gender</Form.Label>
                            <Form.Select onChange={(event)=>setgender(event.target.value)} aria-label="Default select example">
                                <option>Choose your gender</option>
                                <option value="Male">male</option>
                                <option value="Female">female</option>

                            </Form.Select>
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handelsubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Edituser