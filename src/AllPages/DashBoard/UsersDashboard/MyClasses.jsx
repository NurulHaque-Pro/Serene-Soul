import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle';
import useCart from '../../../Hooks/useCart';
import Swal from 'sweetalert2';

const MyClasses = () => {

    const [cart, refetch] = useCart();

    const total = cart.reduce((sum, item) => parseFloat(item.price) + sum, 0)
    console.log(cart);

    const handleMyClassDelete = (id) => {

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
                fetch(`http://localhost:5000/carts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className='w-full px-10'>
            <Helmet>
                <title>Serene Soul | My Classes</title>
            </Helmet>
            <div className='text-center'>
                <SectionTitle title='My Selected Classes' subTitle='Please complete payment for enroll classes'></SectionTitle>
            </div>

            <div className='flex justify-between items-center p-5'>
                <h3>Total Classes: {cart.length}</h3>
                <h3>Total Price: {total}</h3>
                <button className="btn btn-outline btn-accent">Pay All</button>

            </div>
            <div>
                <div className="w-full overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Class Name</th>
                                <th>Duration</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        {
                            cart.map((selected, index) => (
                                <tbody key={selected._id}>
                                    {/* row 1 */}
                                    <tr>
                                        <th>
                                            <label>
                                                {index + 1}
                                            </label>
                                        </th>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={selected?.image} alt="Class Image" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {selected.course_name}
                                            <br />
                                            {/* <span className="badge badge-ghost badge-sm"></span> */}
                                        </td>
                                        <td>{selected.duration} Weeks</td>
                                        <th>
                                            <button className="">${selected.price}</button>
                                        </th>
                                        <th>
                                            <button onClick={() => { handleMyClassDelete(selected._id) }} className="btn btn-square btn-outline">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                            </button>
                                        </th>
                                    </tr>
                                </tbody>
                            ))
                        }

                        <tfoot>
                        </tfoot>

                    </table>
                </div>
            </div>

        </div>
    );
};

export default MyClasses;