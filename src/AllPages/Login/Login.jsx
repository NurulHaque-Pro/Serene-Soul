import React from 'react';
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';

const Login = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
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
                                <h1 className="text-4xl font-bold">Please Login!</h1>
                            </div>
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                    {/* <div className='text-center'>
                            <small className='text-red-500'>{error}</small>
                        </div> */}
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
                                        <input className="input input-bordered" placeholder='password' type='password' {...register("password", { required: true, })} />
                                        {errors.password && <span className="text-red-500">Password is required</span>}


                                    </div>
                                    <div className="form-control mt-6">
                                        <Link><button className="w-full btn btn-primary">Login</button></Link>
                                    </div>
                                    <div className=''>
                                        <label className="label">
                                            <p className='label-text-alt'>
                                                Not an user?
                                                <Link to='/register' className=" link link-hover text-primary"> Sign Up</Link>
                                            </p>
                                        </label>
                                    </div>
                                    <div className='text-center pt-3'>
                                        <p>Or Sign In With</p>
                                        <div className='flex gap-3 justify-center'>
                                            <button ><img className='w-8 pt-3' src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" alt="" /></button>
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