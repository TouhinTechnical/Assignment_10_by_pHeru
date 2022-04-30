import React from 'react';
import ChooseImage from '../../../images/counter-img.png';
import Icon1 from '../../../images/Icon/icon1.png';
import Icon2 from '../../../images/Icon/icon2.png';
import Icon3 from '../../../images/Icon/icon3.png';
import Icon4 from '../../../images/Icon/icon4.png';
import './ChooseUs.css';

const ChooseUs = () => {
    return (
        <section className='chooseSection ptb-100'>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="chooseImg mt-5">
                            <img src={ChooseImage} alt="Phuto" />
                        </div>
                    </div> {/* col-4 */}
                    <div className="col-8">
                        <div className="chooseContent">
                            <h5 className='fw-700 fs-17 text-AlizarinCrimson text-center'>Why Choose Us</h5>
                            <h3 className='fw-700 fs-40 text-BlackRussian mtb-30 text-center'>We Have a Lot of Skills in Cyber Security</h3>
                            <div className="chooseSkillContent row">
                                <div className="col-6">
                                    <div className="singleChooseSkillContent d-flex">
                                        <div className="iconimg">
                                            <img src={Icon1} alt="" />
                                        </div>
                                        <div className="chooseSkillContentText ms-5">
                                            <h1 className="fs-40 fw-900">365</h1>
                                            <h6>Clients Protection</h6>
                                        </div>
                                    </div>
                                </div> {/* col-6 */}
                                <div className="col-6">
                                    <div className="singleChooseSkillContent d-flex">
                                        <div className="iconimg">
                                        <img src={Icon2} alt="" />
                                        </div>
                                        <div className="chooseSkillContentText ms-5">
                                        <h1 className="fs-40 fw-900">1000</h1>
                                        <h6>Trusted Organizations</h6>
                                        </div>
                                    </div>
                                </div> {/* col-6 */}
                                <div className="col-6">
                                    <div className="singleChooseSkillContent d-flex">
                                        <div className="iconimg">
                                            <img src={Icon3} alt="" />
                                        </div>
                                        <div className="chooseSkillContentText ms-5">
                                            <h1 className="fs-40 fw-900">567</h1>
                                            <h6>Website Protection</h6>
                                        </div>
                                    </div>
                                </div> {/* col-6 */}
                                <div className="col-6">
                                    <div className="singleChooseSkillContent d-flex">
                                        <div className="iconimg">
                                            <img src={Icon4} alt="" />
                                        </div>
                                        <div className="chooseSkillContentText ms-5">
                                            <h1 className="fs-40 fw-900">100%</h1>
                                            <h6>Innovative Technology</h6>
                                        </div>
                                    </div>
                                </div> {/* col-6 */}
                            </div> {/* chooseSkillContent */}
                        </div> {/* chooseContent */}
                    </div> {/* col-8 */}
                </div> {/* Row */}
            </div> {/* Container */}
        </section>
    );
};

export default ChooseUs;