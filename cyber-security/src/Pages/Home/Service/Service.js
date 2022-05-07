import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id, name, img, description, price} = service;
    const navigate = useNavigate();
    const navigateToCheckOut = id =>{
        navigate(`/service/${id}`);
    }
    return (
        <div className='singleService'>
            <img src={img} alt={name} />
            <div className="serviceTextContent p-3">
                <h3 className='fw-900 fs-20 text-white mb-2'>{name}</h3>
                <span className='text fs-20 fw-700'>{price}</span>
                <p className='text-white'>{description}</p>
                <button onClick={() => navigateToCheckOut(id)} className='btn btn-primary'>Check Out</button>
            </div>
        </div>
    );
};

export default Service;