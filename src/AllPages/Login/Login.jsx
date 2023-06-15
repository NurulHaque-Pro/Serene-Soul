import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'

const Login = () => {

    const { signInWithEmail, signInWithGoogle } = useContext(AuthContext)

    const [error, setError] = useState('')

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleLogin = event => {
        setError('');
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithEmail(email, password)
            .then(result => {
                Swal.fire(
                    'Login Successfully',
                    '',
                    'success'
                )
                navigate(from, { replace: true });
                form.reset();
            })
            .catch(error => {
                let errorMessage = '';

                switch (error.code) {
                    case 'auth/invalid-email':
                        errorMessage = 'Invalid email address';
                        break;
                    case 'auth/user-disabled':
                        errorMessage = 'User account is disabled';
                        break;
                    case 'auth/user-not-found':
                        errorMessage = 'User not found';
                        break;
                    case 'auth/wrong-password':
                        errorMessage = 'Invalid password';
                        break;
                    default:
                        errorMessage = error.message;
                }

                setError(errorMessage);
            });

    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                Swal.fire(
                    'Login Successfully',
                    '',
                    'success'
                )
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div className='container mx-auto'>

            <div className='grid items-center md:grid-cols-2 md:gap-5 bg-base-200 md:py-10 py-2 '>
                <div className='order-2 md:order-1'>
                    {/* <Lottie className='w-[300px] md:w-[500px] mx-auto' animationData={truckAnimation} loop={true} /> */}
                </div>
                <div className='order-1 md:order-2'>
                    <div className="hero min-h-screen">
                        <div className="hero-content md:w-96 flex-col">
                            <div className="text-center mb-5">
                                <h1 className="text-4xl font-bold">Please Login!</h1>
                            </div>
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <form onSubmit={handleLogin} className="card-body">
                                    <div className='text-center'>
                                        <small className='text-red-500'>{error}</small>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input name='email' required type="email" placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input name='password' required type="password" placeholder="password" className="input input-bordered" />

                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                    <div className=''>
                                        <label className="label">
                                            <p className='label-text-alt'>
                                                Not an user?
                                                <Link to='/register' className=" link link-hover text-primary"> Sign-Up</Link>
                                            </p>
                                        </label>
                                    </div>
                                    <div className='text-center pt-3'>
                                        <p>Or Sign In With</p>
                                        <div className='flex gap-3 justify-center'>
                                            <button onClick={handleGoogleLogin}><img className='w-8 pt-3' src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" alt="" /></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Login;