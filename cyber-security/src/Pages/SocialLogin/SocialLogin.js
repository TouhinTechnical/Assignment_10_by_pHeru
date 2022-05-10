import React from 'react';
import Google from '../../images/Social/Google.png';
import Facebook from '../../images/Social/Facebook.png';
import Apple from '../../images/Social/Apple.png';
import { useSignInWithApple, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const [signInWithGoogle, userGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [signInWithApple, userApple, errorApple] = useSignInWithApple(auth);
    const [signInWithFacebook, userFacebook, errorFacebook] = useSignInWithFacebook(auth);
    const navigate = useNavigate();
    // Error message show

    // aikane facebook & apple thik korlam kintu login hosse nah aktu ki problem holo check kore feedback diyen(admin vaiya)
    let errorElement;
    if (errorGoogle || errorApple || errorFacebook){
        errorElement = <p className="text-danger">Error: {errorGoogle?.message} {errorApple?.message} {errorFacebook?.message}</p>
    }
    // login succesful hoile navigate korbe
    if (userGoogle || userApple || userFacebook){
        navigate('/services');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
                <p className='mt-3 px-2'>OR</p>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
            </div>
            {errorElement} {/* error message */}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline-dark d-block mx-auto mb-2 w-75'>
                    <img src={Google} alt="Google" style={{width: '30px'}} className='me-2' />
                    Google With Sign In
                </button>
                <button onClick={() => signInWithFacebook()} className='btn btn-outline-dark d-block mx-auto w-75'>
                    <img src={Facebook} alt="Facebook" style={{width: '30px'}} className='me-2' />
                    Facebook With Sign In
                </button>
                <button onClick={() => signInWithApple()} className='btn btn-outline-dark d-block mx-auto mt-2 w-75'>
                    <img src={Apple} alt="Apple" style={{width: '30px'}} className='me-2' />
                    Apple With Sign In
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;