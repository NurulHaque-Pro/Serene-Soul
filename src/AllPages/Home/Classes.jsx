import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { Link } from 'react-router-dom';

const Classes = () => {

    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data.slice(0, 6)))
    }, [])
    const handleAddToCart = course => {
        console.log(course);
    }

    return (
        <div className='pt-10 pb-16 bg-[#77BEAE] bg-opacity-5'>
            <div className='container mx-auto '>
                <div className='text-center pb-5'>

                    <SectionTitle title='Popular Classes' subTitle='Visit our most popular classes'></SectionTitle>
                </div>
                <div className='grid grid-cols-3 gap-10'>
                    {
                        classes.map(singleClass => (

                            <div className="card bg-base-100 shadow-xl">
                                <figure><img className='w-full h-56' src={singleClass.course_image} alt="Course" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {singleClass.course_name}
                                    </h2>
                                    <p>{singleClass.course_short_description}</p>
                                    <div className="card-actions py-2">
                                        <div className="badge badge-primary">Total Classes: {singleClass.total_classes}</div>
                                        <div className="badge badge-outline">Duration: {singleClass.course_duration} Weeks</div>
                                        <div className="badge badge-outline">Available Seats: {singleClass.available_seats}</div>
                                    </div>

                                    <button className='btn btn-primary' onClick={() => {handleAddToCart(singleClass)}}>Enroll Now</button>
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