import React from 'react';
import CustomLink from '../Shared/CustomLink/CustomLink';
import SignupImage from '../../images/signupfrom-img.png';
import './SignUp.css';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <>
            <div className='signupBanner sign-bg'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="signupBanner-text">
                                <span>Sign Up</span>
                                <span className='bannerTitle fs-40'>Welcome to the Cyber Security Company</span>
                                <ul className='bannerTitleLink'>
                                    <li>
                                        <CustomLink to="/">Home</CustomLink>
                                    </li>
                                    <li>/</li>
                                    <li>
                                        <CustomLink to="/signup">Sign Up</CustomLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="signup ptb-100 bg-PearlBush">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="signupFrom mt-5">
                                <h2 className='fw-700 text-BlackRussian mb-4'>Create Account</h2>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>User Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Your Own Name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Your email address" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter Your Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicConfrimPassword">
                                        <Form.Label>Confrim Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter Your Confrim Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Accept Cyber Security Terms and Conditions" />
                                    </Form.Group>
                                    <input className='btn btn-primary w-100' type="submit" value= "Sign Up"/>
                                </Form>
                                <p className='mt-3'>Already have a account ? <Link to='/signin' className='text-primary pe-auto text-decoration-none'>Please Sign In</Link></p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="signupImg ms-5">
                                <img src={SignupImage} alt="UserImage" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;