import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';
import '../CustomCss/CustomCss.css';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
const Header = () => {
    // Sign out function
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const handlerSignOut = () =>{
        signOut(auth);
        navigate('/signin');
    }
    return (
        <>
            <div className='h-95 ptb-28 border-bottom sticky-top' bg="light">
                {['lg'].map((expand) => (
                    <Navbar key={expand} expand={expand}>
                        <Container>
                            <Navbar.Brand as={Link} to="/home" className='fw-700'>
                                <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top" /> {' '} 
                                Cybar Security Provider
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}> Cybar Security Provider </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3 fw-700 fs-17">
                                        <Nav.Link as={CustomLink} to="/home" className='text-BlackRussian'>Home</Nav.Link>
                                        <Nav.Link as={CustomLink} to="/about" className='text-BlackRussian'>About</Nav.Link>
                                        <Nav.Link as={CustomLink} to="/services" className='text-BlackRussian'>Services</Nav.Link>
                                        <Nav.Link as={CustomLink} to="/blogs" className='text-BlackRussian'>Blogs</Nav.Link>
                                        <Nav.Link as={CustomLink} to="/contactus" className='text-BlackRussian'>Contact Us</Nav.Link>
                                    </Nav>
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        {/* optional changing diye sign in sign out swipe koralam */}
                                        {
                                            user ? <button className='btn btn-outline-primary fs-17 fw-700 text-BlackRussian' onClick={handlerSignOut}>Sign Out</button>
                                            :
                                            <>
                                                <Nav.Link as={CustomLink} to="/signin" className='btn btn-outline-primary fs-17 fw-700 text-BlackRussian'>Sign In</Nav.Link>
                                                <Nav.Link as={CustomLink} to="/signup" className='btn btn-info ms-4 fs-17 fw-700 text-BlackRussian'>Sign Up</Nav.Link>
                                            </>  
                                        }
                                    </Nav>
                                    <Outlet/>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}   
            </div>
        </>
    );
};

export default Header;