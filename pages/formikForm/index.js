import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';


const initialvalue = {
    name: "",
    email: "",
    password: "",
};

const userSchema = yup.object().shape({
    name: yup.string().min(3).max(20).required(),
    email: yup.string().email('must be a valid email').required(),
    password: yup.string().min(6).required(),

});

function LoginForm() {

    const { Formik } = formik;

    const [users, setUsers] = useState([]);

    // const Formik = initialvalue;
    // const Formik = useFormik(initialvalue);

    const handleSubmitForm = (values,actions) => {

        setUsers([...users, values]);
        actions.resetForm();
        console.log("=====users====", values);
    }

    return (

        <Formik
            validationSchema={userSchema}
            onSubmit={handleSubmitForm}
            initialValues={initialvalue}
        >

            {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form onSubmit={handleSubmit}>

                    <Row className="mb-3">


                        <Form.Group as={Col} md="4" controlId="validationFormik01">
                            <Form.Label style={{margin:"10px"}}>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={values.name}
                                onChange={handleChange}
                                style={{margin:"10px"}}
                                // isValid={touched.name && !errors.name}
                                isInvalid={touched.name && !!errors.name}
                            />

                            <Form.Control.Feedback type='invalid' >{errors.name}</Form.Control.Feedback>


                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationFormik02">
                            <Form.Label style={{margin:"10px"}} >Email</Form.Label>
                            <Form.Control
                                type="text"
                                name="email"
                                placeholder="Enter your email"
                                value={values.email}
                                onChange={handleChange}
                                style={{margin:"10px"}}
                                // isValid={touched.email && !errors.email}
                                isInvalid={touched.email && !!errors.email}
                            />

                            <Form.Control.Feedback type='invalid' >{errors.email}</Form.Control.Feedback>
                        </Form.Group>


                        <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                            <Form.Label>Password</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend"></InputGroup.Text>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter password"
                                    aria-describedby="inputGroupPrepend"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    isInvalid={!!errors.password}
                                />

                                <Form.Control.Feedback type="invalid">
                                    {errors.password}
                                </Form.Control.Feedback>

                            </InputGroup>
                        </Form.Group>
                    </Row>

                    <Button type="submit" style={{margin:"10px"}}>Submit form</Button>
                </Form>
            )}


        </Formik>
    )

}

export default LoginForm;