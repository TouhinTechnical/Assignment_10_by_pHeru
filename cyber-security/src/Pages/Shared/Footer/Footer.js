import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footerSection'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-6">
                        <div className="copyright">
                            <span>Copyright @ 2022 Cyber Security Design by <Link to="" target="_blank">TouhinTechnical</Link></span>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="privacyPart">
                            <span className='me-5 pri1'>Privacy Policy</span>
                            <span className='pri2'>Terms & Conditions</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;