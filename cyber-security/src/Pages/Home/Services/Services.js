import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    // fake data load
    const [services, setServices] =useState([]);
    useEffect(() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <section className='serviceSection ptb-100'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h5 className='fw-700 fs-17 text-AlizarinCrimson text-center'>Cyber Security Services</h5>
                        <h2 className='fw-700 fs-50 text-BlackRussian mtb-30 text-center'>You Can Protect Your Organization's Cybersecurity By Services Us</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="serviceContent">
                        {
                            services.map(service => <Service
                                key={service.id}
                                service = {service}
                            ></Service>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;