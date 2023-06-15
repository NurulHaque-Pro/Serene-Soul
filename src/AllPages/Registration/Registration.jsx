import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'

const Registration = () => {

    const [error, setError] = useState('');
    const { signUpWithEmail, signInWithGoogle } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        // console.log(data)
        signUpWithEmail(data.email, data.password)
            .then(result => {
                const loggedInUser = result.user;
                Swal.fire(
                    'User Created Successfully',
                    '',
                    'success'
                )
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleGoogleLogin = () =>{
        signInWithGoogle()
        .then(result => {
            Swal.fire(
                'Login Successfully',
                '',
                'success'
            )
        })
        .catch(error =>{
            setError(error.message)
        })
    }

    return (
        <div className='container mx-auto'>

            <div className='grid items-center md:grid-cols-2 md:gap-5 md:py-28 py-2 '>
                <div className='order-2 md:order-1'>
                    {/* <Lottie className='w-[300px] md:w-[500px] mx-auto' animationData={yogaAnimation} loop={true} /> */}
                </div>
                <div className='order-1 md:order-2'>
                    <div className="hero min-h-screen">
                        <div className="hero-content md:w-96 flex-col">
                            <div className="text-center mb-5">
                                <h1 className="text-4xl font-bold">Please Sign Up!</h1>
                            </div>
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                    <div className='text-center'>
                                        <small className='text-red-500'>{error}</small>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input className="input input-bordered" type='text' placeholder='Full name' {...register("name", { required: true })} />
                                        {errors.name && <span className="text-red-500">Name is required</span>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input className="input input-bordered" placeholder='Email' type='email' {...register("email", { required: true })} />
                                        {errors.email && <span className="text-red-500">Email is required</span>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input className="input input-bordered" placeholder='password' type='password' {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/ })} />
                                        {errors.password && <span className="text-red-500">Password is required</span>}
                                        {errors.password && errors.password.type === "pattern" && (
                                            <span className="text-red-500">
                                                Password must contain 6 characters and at least one uppercase letter, one lowercase letter and one number.
                                            </span>
                                        )}

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