import React from 'react';
import Touhid from '../../images/Touhid.png';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="about-section ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="about-img">
                                <img src={Touhid} alt="Touhid" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="intro-me bg-EastBay text-white p-30 shadow-lg rounded">
                                <h5 className='text-danger'>আমার সম্পর্কে</h5>
                                <h5><span className='text-info'>প্রতিষ্ঠাতা নাম:</span> তৌহিদুল ইসলাম চৌধুরী</h5>
                                <span className='text-info'>জুনিয়র ওয়েব ডেভেলপার</span>
                                <p className='mt-3'><span className='fw-bold'>আমার লক্ষ্য:</span> আমি একজন ওয়েব ডেভেলপার হতে চাই! এই কারণে আমি প্রোগ্রামিং হিরো কোর্সে ভর্তি হয়েছি এবং এখান থেকে সঠিকভাবে শেখার চেষ্টা করি। আমি এই কোর্স করতে ভালোবাসি. এখান থেকে আমি অনেক কিছু শিখতে পারি। আমি বিশ্বাস করি একদিন আমি আমার লক্ষ্য অর্জন করব।</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;