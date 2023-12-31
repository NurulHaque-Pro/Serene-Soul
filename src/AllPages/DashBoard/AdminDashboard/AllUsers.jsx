import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query'
import SectionTitle from '../../../components/SectionTitle';
import { FaChalkboardTeacher, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2'
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const AllUsers = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const response = await axiosSecure.get('/users')
        return response.data;
    })

    const handleUserDelete = (id) => {

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
                fetch(`https://serene-soul-server-nurulhaque-pro.vercel.app/users/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'User has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }



    const handleAdminRole = user => {
        // console.log(user);
        fetch(`https://serene-soul-server-nurulhaque-pro.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire(
                        {
                            icon: 'success',
                            title: `${user.name} is now Admin`,
                            showConfirmButton: false,
                            timer: 1500
                        }
                    )
                }
            })
    }

    // Handle Teacher Role

    const handleTeacherRole = user => {
        fetch(`https://serene-soul-server-nurulhaque-pro.vercel.app/users/teacher/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: `${user.name} is now a Teacher`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    };



    return (
        <div className='w-full px-10'>
            <Helmet>
                <title>Serene Soul | All Users</title>
            </Helmet>
            <div className='text-center'>
                <SectionTitle title={`All users: ${users.length}`} subTitle='Serene Soul'></SectionTitle>
            </div>
            <div>
                <div className="overflow-x-auto">

                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            users.map((user, index) => (
                                <tbody key={user._id}>
                                    {/* row 1 */}
                                    <tr>
                                        <th>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td className='flex gap-1'>
                                            {user.role === 'admin' ? (
                                                'Admin'
                                            ) : user.role === 'teacher' ? (
                                                'Teacher'
                                            ) : (
                                                <>
                                                    <button title='Make Admin' onClick={() => handleAdminRole(user)} className="btn btn-ghost bg-primary  text-white">
                                                        <FaUserShield></FaUserShield>
                                                    </button>
                                                    <button title='Make Teacher' onClick={() => handleTeacherRole(user)} className="btn btn-ghost bg-primary  text-white">
                                                        <FaChalkboardTeacher></FaChalkboardTeacher>
                                                    </button>
                                                </>
                                            )}
                                        </td>
                                        <td>
                                            <button onClick={() => { handleUserDelete(user._id) }} className="btn btn-square btn-outline">
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

export default AllUsers;