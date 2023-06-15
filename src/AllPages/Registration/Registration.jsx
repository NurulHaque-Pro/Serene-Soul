import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form"
import loginImage from '../../assets/login.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'
import SectionTitle from '../../components/SectionTitle';

const Registration = () => {

    const [error, setError] = useState('');
    const { signUpWithEmail, signInWithGoogle, updateUserProfile } = useContext(AuthContext);
    const [confirmPassword, setConfirmPassword] = useState('');


    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        if (data.password !== data.confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        // console.log(data)
        signUpWithEmail(data.email, data.password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);

                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        Swal.fire(
                            'User Created Successfully',
                            '',
                            'success'
                        )
                        navigate(from, { replace: true });
                        form.reset();
                    })
                    .catch(error => {
                        setError(error.message)
                    })

            })
            .catch(error => {
                setError(error.message)
            })
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
                <SectionTitle title='Please Register!' subTitle='Register for get more access.'></SectionTitle>
            </div>

            <div className='grid items-center md:grid-cols-2 md:gap-5 '>
                <div className='order-2 md:order-1'>
                    <img className='w-[300px] md:w-[500px] mx-auto' src={loginImage} alt="" />
                </div>
                <div className='order-1 md:order-2'>
                    <div className="hero min-h-screen">
                        <div className="hero-content flex-col">
                            <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                    <div className='text-center'>
                                        <small className='text-red-500'>{error}</small>
                                    </div>
                                    <div className='md:flex md:gap-3'>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input className="input input-bordered border-black" type='text' placeholder='Full name' {...register("name", { required: true })} />
                                            {errors.name && <span className="text-red-500">Name is required</span>}
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input className="input input-bordered border-black" placeholder='Email' type='email' {...register("email", { required: true })} />
                                            {errors.email && <span className="text-red-500">Email is required</span>}
                                        </div>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo URL</span>
                                        </label>
                                        <input className="input input-bordered border-black" placeholder='Photo URL' type='text' {...register("photo", { required: true })} />
                                        {errors.photo && <span className="text-red-500">Photo Url is required</span>}
                                    </div>
                                    <div className='md:flex md:gap-3'>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input className="input input-bordered border-black" placeholder='Password' type='password' {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/ })} />
                                            {errors.password && <span className="text-red-500">Password is required</span>}
                                            {errors.password && errors.password.type === "pattern" && (
                                                <span className="text-red-500">
                                                    Password must contain 6 characters and at least one uppercase letter, one lowercase letter and one number.
                                                </span>
                                            )}

                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Confirm Password</span>
                                            </label>
                                            <input className="input input-bordered border-black" placeholder='Confirm password' type='password'
                                                {...register("confirmPassword", { required: true })}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                            />
                                            {errors.confirmPassword && <span className="text-red-500">Confirm Password is required</span>}


                                        </div>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Sign Up</button>
                                    </div>
                                    <div className=''>
                                        <label className="label">
                                            <p className='label-text-alt'>
                                                Already a user?
                                                <Link to='/login' className=" link link-hover text-primary"> Login</Link>
                                            </p>
                                        </label>
                                    </div>

                                </form>
                                <div className='text-center pb-7'>
                                    <p>Or Sign In With</p>
                                    <div className='flex gap-3 justify-center'>
                                        <button onClick={handleGoogleLogin}><img className='w-8 pt-3' src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" alt="" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Registration;