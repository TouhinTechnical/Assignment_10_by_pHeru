import React from 'react';
import { Form } from 'react-bootstrap';
import CustomLink from '../Shared/CustomLink/CustomLink';
import SigninImage from '../../images/SignIn.png';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <>
            <div className='signinBanner sign-bg'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="signupBanner-text">
                                <span>Sign In</span>
                                <span className='bannerTitle fs-40'>Welcome to the Cyber Security Company</span>
                                <ul className='bannerTitleLink'>
                                    <li>
                                        <CustomLink to="/">Home</CustomLink>
                                    </li>
                                    <li>/</li>
                                    <li>
                                        <CustomLink to="/signin">Sign In</CustomLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="signin ptb-100 bg-PearlBush">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="signinFrom mt-5">
                                <h2 className='fw-700 text-BlackRussian mb-4'>Sign In</h2>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Your email address" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter Your Password" />
                                    </Form.Group>
                                    <input className='btn btn-primary w-100' type="submit" value= "Sign In"/>
                                </Form>
                                <p className='mt-3'>Not A Cyber Security Member!! Create a new account ? <Link to='/signup' className='text-primary pe-auto text-decoration-none'>Please Sign Up</Link></p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="signupImg ms-5">
                                <img src={SigninImage} alt="UserImage" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;