import React, { useState } from 'react';
import CustomLink from '../Shared/CustomLink/CustomLink';
import SignupImage from '../../images/signupfrom-img.png';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import './SignUp.css';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
    // check label (useState)
    const [agree, setAgree] = useState(false);
    // email password authentification
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    if(user){
        console.log('user', user);
    }
    // email verification
    const [sendEmailVerification] = useSendEmailVerification(auth);
    // User Name Update
    const [updateProfile] = useUpdateProfile(auth);
    // Navigate
    const navigate = useNavigate();
    const navigateSignin = () =>{
        navigate('/signin');
    }
    // from submit function
    const handlerSignup = async (event) =>{
        event.preventDefault(); // submit from ta reload nah hoyer jonno
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const cPassword = event.target.cPassword.value;
        await createUserWithEmailAndPassword(email, password, cPassword);
        await updateProfile({displayName: name});
        console.log('Updated profile');
        navigate('/signin'); // user sign up korar por sign in page navigate hoye jabe
        // email verification
        if(email){
            await sendEmailVerification(email);
            toast('Verification Email Sent');
        }
        else{
            toast('Please Enter your email address');
        }
        
    }
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
                                <Form onSubmit={handlerSignup}>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>User Name</Form.Label>
                                        <Form.Control type="text" name='name' placeholder="Enter Your Own Name" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" name='email' placeholder="Enter Your email address" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name='password' placeholder="Enter Your Password" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicConfrimPassword">
                                        <Form.Label>Confrim Password</Form.Label>
                                        <Form.Control type="password" name='cPassword' placeholder="Enter Your Confrim Password" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check onClick={() => setAgree(!agree)} type="checkbox" className={agree ? 'text-primary' : 'text-danger'} label="Accept Cyber Security Terms and Conditions" />
                                    </Form.Group>
                                    
                                    <input disabled={!agree} className='btn btn-primary w-100' type="submit" value= "Sign Up"/>
                                </Form>
                                <p className='mt-3'>Already have a account ? <Link to='/signin' className='text-primary pe-auto text-decoration-none' onClick={navigateSignin}>Please Sign In</Link></p>
                                <SocialLogin/>
                                <ToastContainer/>
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