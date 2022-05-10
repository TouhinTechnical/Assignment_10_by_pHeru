import React from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const {serviceId} = useParams();
    const handlerCheckOut = (event) =>{
        // event.preventDefault(); // submit from ta reload nah hoyer jonno
        // const name = event.target.name.value;
        // const email = event.target.email.value;
        // const address = event.target.address.value;
        // const number = event.target.number.value;
    }
    return (
        <div>
            <div className="checktitle text-center">
                <h2 className='btn btn-primary mt-4'>Checkout :{serviceId}</h2>
            </div>
            <div className="checkoutFrom ptb-28">
                <div className="container">
                    <h3 className="text-secondary text-left">Client Review</h3>
                    <Form onSubmit={handlerCheckOut}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" name='name' placeholder="Enter Your Own Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter Your email address" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" name='address' placeholder="Enter Your Address" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicConfrimPassword">
                            <Form.Label>Moblie Number</Form.Label>
                            <Form.Control type="number" name='number' placeholder="Enter Your Number" required />
                        </Form.Group>
                        <input className='btn btn-primary w-50 text-center d-block mx-auto' type="submit" value= "Submit"/>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;