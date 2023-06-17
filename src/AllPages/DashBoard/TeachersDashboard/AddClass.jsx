import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const AddClass = () => {

    const { user } = useContext(AuthContext)

    console.log(user);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {
        // console.log(data);
        data.teachersPhoto = user?.photoURL;
        // const savedClasses = { name: data.name, email: data.email }
        fetch('https://serene-soul-server-nurulhaque-pro.vercel.app/classes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    reset();
                    Swal.fire(
                        'Class Added Successfully',
                        '',
                        'success'
                    )
                    navigate(from, { replace: true });
                }
            })
    }

    return (
        <div className=''>
            <Helmet>
                <title>Serene Soul | Add Class</title>
            </Helmet>
            <div className='text-center'>
                <SectionTitle title='Add A New Class' subTitle='Please complete the form to add new class'></SectionTitle>
            </div>
            <div className='grid items-center '>
                <div className=''>
                    <div className="hero min-h-screen">
                        <div className="hero-content flex-col">
                            <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                    <div className='md:flex md:gap-3'>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Teachers Name</span>
                                            </label>
                                            <input className="input input-bordered border-black" type='text' placeholder='Teachers full name' readOnly defaultValue={user.displayName} {...register("name", { required: true })} />

                                            {/* {errors.teachersName && <span className="text-red-500">Teachers name is required!</span>} */}
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Teachers Email</span>
                                            </label>
                                            <input className="input input-bordered border-black" placeholder='Email' type='email' readOnly defaultValue={user.email} {...register("email", { required: true })} />

                                            {/* {errors.email && <span className="text-red-500">Email is required</span>} */}
                                        </div>
                                    </div>
                                    <div className='md:flex md:gap-3'>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Class Title</span>
                                            </label>
                                            <input className="input input-bordered border-black" type='text' placeholder='Class Title' {...register("course_name", { required: true })} />

                                            {errors.course_name && <span className="text-red-500">Class title is required!</span>}
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Class Photo URL</span>
                                            </label>
                                            <input className="input input-bordered border-black" placeholder='Photo URL' type='text' {...register("course_image", { required: true })} />
                                            {errors.course_image && <span className="text-red-500">Photo Url is required!</span>}
                                        </div>
                                    </div>
                                    <div className='md:flex md:gap-3'>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Available Seats</span>
                                            </label>
                                            <input className="input input-bordered border-black" type='number' placeholder='Ex: 12' {...register("available_seats", { required: true })} />

                                            {errors.available_seats && <span className="text-red-500">Available Seats is required!</span>}
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Price</span>
                                            </label>
                                            <input className="input input-bordered border-black" placeholder='Ex: 120' type='number' {...register("course_price", { required: true })} />
                                            {errors.course_price && <span className="text-red-500">Price is required!</span>}
                                        </div>
                                    </div>
                                    <div className='md:flex md:gap-3'>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Total Classes</span>
                                            </label>
                                            <input className="input input-bordered border-black" type='number' placeholder='Ex: 5' {...register("total_classes", { required: true })} />

                                            {errors.total_classes && <span className="text-red-500">Total Classes is required!</span>}
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Course duration (Weeks)</span>
                                            </label>
                                            <input className="input input-bordered border-black" placeholder='Ex: 3' type='number' {...register("course_duration", { required: true })} />
                                            {errors.course_duration && <span className="text-red-500">Course duration is required!</span>}
                                        </div>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Class Short Description</span>
                                        </label>

                                        <textarea className="input input-bordered border-black" placeholder='Write here...' type='text' {...register("course_short_description", { required: true })} />
                                        {errors.course_short_description && <span className="text-red-500">Description is required!</span>}
                                    </div>

                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Add Class</button>
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

export default AddClass;