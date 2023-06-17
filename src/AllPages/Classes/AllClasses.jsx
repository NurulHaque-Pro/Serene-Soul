import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SectionTitle from '../../components/SectionTitle';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useCart from '../../Hooks/useCart';
import useAdmin from '../../Hooks/useAdmin';
import useTeacher from '../../Hooks/useTeacher';

const Classes = () => {
    const [isAdmin] = useAdmin();
    const [isTeacher] = useTeacher();

    const [classes, setClasses] = useState([])
    const { user, loading } = useContext(AuthContext)

    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        fetch('https://serene-soul-server-nurulhaque-pro.vercel.app/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    const handleAddToCart = course => {
        console.log(course);
        if (user) {
            const selectedClass = { classId: course._id, email: user.email, course_name: course.course_name, price: course.course_price, image: course.course_image, duration: course.course_duration, instructor: course.teacher };
            fetch('https://serene-soul-server-nurulhaque-pro.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClass)

            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class added to your selected class',
                            showConfirmButton: false,
                            timer: 2000
                        })
                    }
                })

        }
        else {
            Swal.fire({
                title: 'You are not logged in',
                text: "You must be login to select class!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div className='pb-20 pt-32  bg-[#77BEAE] bg-opacity-5'>
            <div className='container mx-auto '>
                <div className='text-center pb-5'>

                    <SectionTitle title='Popular Classes' subTitle='Visit our most popular classes'></SectionTitle>
                </div>
                <div className='grid grid-cols-3 gap-10'>
                    {
                        classes.map(singleClass => (

                            <div key={singleClass._id} className="card bg-base-100 shadow-xl">
                                <figure><img className='w-full h-56' src={singleClass.course_image} alt="Course" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {singleClass.course_name}
                                    </h2>
                                    <p className='font-medium'>Teacher: <span className='text-primary'>{singleClass.name}</span></p>
                                    <p>{singleClass.course_short_description}</p>
                                    <div className="card-actions py-2">
                                        <div className="badge badge-primary">Total Classes: {singleClass.total_classes}</div>
                                        <div className="badge badge-outline">Duration: {singleClass.course_duration} Weeks</div>
                                        <div className="badge badge-outline">Available Seats: {singleClass.available_seats}</div>
                                    </div>

                                    <button
                                        className={`btn btn-primary ${isAdmin || isTeacher ? 'disabled' : ''}`}
                                        onClick={() => { handleAddToCart(singleClass) }}
                                        disabled={isAdmin || isTeacher}
                                    >
                                        Select
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Classes;