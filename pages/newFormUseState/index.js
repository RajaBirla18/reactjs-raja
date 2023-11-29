import React, { useRef, useState } from "react";
import {Col,Form,Row,Button, FormFloating} from 'react-bootstrap';

const initialvalue = { email: "", password: "" };

function NewForm() {
    const [formData, setFormData] = useState(initialvalue);

    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        setFormData(initialvalue);

        formRef.current.reset();

        console.log("====data===", formData);
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    };

    return (
        <>
            <Form onSubmit={handleSubmit} ref={formRef}>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control placeholder="Enter your Email here" onChange={handleChange} name="email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password" placeholder="Enter Password here" name="password" onChange={handleChange}/>
                    </Col>
                </Form.Group>
                <Button variant="success" type="submit" onSubmit={handleSubmit}>Success</Button>{' '}
            </Form>
        </>
    )
}

export default NewForm;