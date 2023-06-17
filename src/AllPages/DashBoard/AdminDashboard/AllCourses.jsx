import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AllCourses = () => {

    // const [classes, setClasses] = useState([])

    const [axiosSecure] = useAxiosSecure();

    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const response = await axiosSecure.get('/classes')
        return response.data;
    })

    const handleClassDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://serene-soul-server-nurulhaque-pro.vercel.app/classes/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className='w-full px-9'>
            <Helmet>
                <title>Serene Soul | All Classes</title>
            </Helmet>
            <div className='text-center'>
                <SectionTitle title='All classes' subTitle='Serene Soul'></SectionTitle>
            </div>
            <div>
                <div className="overflow-x-auto">

                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Class</th>
                                <th>Teachers</th>
                                <th>Available seats</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            classes.map((course, index) => (
                                <tbody key={course._id}>
                                    {/* row 1 */}
                                    <tr>
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={course?.course_image} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{course.course_name}</td>
                                        <td>{course.name}</td>
                                        <td>{course.available_seats}</td>
                                        <td>${course.course_price}</td>
                                        <td>
                                            <button onClick={() => { handleClassDelete(course._id) }} className="btn btn-square btn-outline">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            ))
                        }

                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllCourses;