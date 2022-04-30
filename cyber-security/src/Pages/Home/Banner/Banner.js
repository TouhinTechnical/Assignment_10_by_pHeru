import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../images/Banner/banner-img.png';
import '../../Shared/CustomCss/CustomCss.css';
const Banner = () => {
    return (
        <section className='bannerArea ptb-100 bg-PearlBush'>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="textContent mt-5">
                            <h5 className='fw-700 fs-17 text-AlizarinCrimson'>World Class Cyber Security</h5>
                            <h1 className='fw-900 fs-62 text-BlackRussian mtb-30'>Cyber Security & IT Management</h1>
                            <p className=' fs-17 text-EastBay'>Cyber security is the protection from the theft to protect of our computer systems and networks or being damaged of our hardware and software.</p>
                            <Link to="/contactus" className='btn btn-outline-danger mt-2 text-EastBay'>Contact us</Link>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="imgContent ms-3">
                            <img src={Image} alt="Photu" />
                        </div>
                    </div>
                </div> {/* Row */}
            </div> {/* Container */}
        </section>
    );
};

export default Banner;