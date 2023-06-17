import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const SocialLogin = () => {

    const { signInWithGoogle, updateUserProfile } = useContext(AuthContext);


    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                const loggedInUser = result.user;
                const savedUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('https://serene-soul-server-nurulhaque-pro.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(() => {
                            Swal.fire(
                                'Login Successfully',
                                '',
                                'success'
                            );
                            navigate(from, { replace: true });
                    })

            })
            .catch(error => {
            })
    }
    return (
        <div>
            <div className='text-center pb-7'>
                <p>Or Sign In With</p>
                <div className='flex gap-3 justify-center'>
                    <button onClick={handleGoogleLogin}><img className='w-8 pt-3' src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" alt="" /></button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;