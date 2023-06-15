import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import loginImage from '../../assets/login.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'
import SectionTitle from '../../components/SectionTitle';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {

    const { signInWithEmail, signInWithGoogle } = useContext(AuthContext)

    const [showPassword, setShowPassword] = useState(false);

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
        <div className='container mx-auto md:py-28'>
            <div className='text-center'>
                <SectionTitle title='Please Login!' subTitle='Login for more access.'></SectionTitle>
            </div>

            <div className='grid items-center md:grid-cols-2 md:gap-5 '>
                <div className='order-2 md:order-1'>
                    <img className='w-[300px] md:w-[500px] mx-auto' src={loginImage} alt="" />
                </div>
                <div className='order-1 md:order-2'>
                    <div className="hero min-h-screen">
                        <div className="hero-content md:w-96 flex-col">
                            <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                                <form onSubmit={handleLogin} className="card-body">
                                    <div className='text-center'>
                                        <small className='text-red-500'>{error}</small>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input name='email' required type="email" placeholder="email" className="input input-bordered border-black" />
                                    </div>
                                    <div className="form-control relative">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input
                                            name="password" required  type={showPassword ? 'text' : 'password'}  placeholder="password" className="input input-bordered border-black pr-10"
                                        />
                                        <button type="button" className="absolute top-3/4 right-3 transform -translate-y-3/4 bg-transparent border-none outline-none cursor-pointer"
                                            onClick={() => setShowPassword(!showPassword)} >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </button>
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