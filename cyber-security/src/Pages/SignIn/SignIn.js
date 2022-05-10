import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import CustomLink from '../Shared/CustomLink/CustomLink';
import SigninImage from '../../images/SignIn.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignIn = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    // Sign In authentication
    const [signInWithEmailAndPassword, user, error] = useSignInWithEmailAndPassword(auth);
    // email & password match nah hoile error dakabe
    if (error){
        toast('Please Enter valid Email & Password');
    }
    // Navigate
    const navigate = useNavigate();
    const location = useLocation();
    let form = location.state?.form?.pathname || '/services';
    if(user){
        navigate(form, {replace: true});
    }
    const navigateSignup = () =>{
        navigate('/signup');
    }
    // Sign In Function
    const handlerSignIn = (event) =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    // Reset Password authentication
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    // Reset Password Function
    const resetPassword = async() =>{
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('Please enter your email address');
        }
    }
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
                                <Form onSubmit={handlerSignIn}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" ref={emailRef} placeholder="Enter Your email address" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" ref={passwordRef} placeholder="Enter Your Password" />
                                    </Form.Group>
                                    <input className='btn btn-primary w-100' type="submit" value= "Sign In"/>
                                </Form>
                                <p className='mt-3'>Not A Cyber Security Member!! Create a new account ? <Link to='/signup' className='text-primary pe-auto text-decoration-none' onClick={navigateSignup}>Please Sign Up</Link></p>
                                <p>Lost A Password Don't Worry!!<button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
                                <SocialLogin/>
                                <ToastContainer/>
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