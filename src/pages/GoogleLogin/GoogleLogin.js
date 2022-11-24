import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
// import { setAuthToken } from '../../../api/auth';


const GoogleLogin = () => {

    const {googleSignIn} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

  const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result => {
            const user = result.user;
            console.log(user);
            toast(' Success!');
            // setAuthToken(user);
            navigate(from, { replace: true });
            // navigate('/login');
        })
        .catch(error => toast.error(error.message))
    }

    return (
        <div>
            <p className='text-center'><small>Social Login</small></p>
            <p className='text-center'>
                <button onClick={handleGoogleSignIn} className='btn  btn-accent w-full'>Google</button>
            </p>
        </div>
    );
};

export default GoogleLogin;