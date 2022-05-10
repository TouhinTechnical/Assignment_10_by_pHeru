import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div>
            <div className="errorPage bg-error404 text-center" style={{height: '100vh'}}>
                <Link to="/home" className='btn btn-danger text-white mt-2 text-EastBay mt-5'>Back to Home</Link>
            </div>
        </div>
    );
};

export default Page404;