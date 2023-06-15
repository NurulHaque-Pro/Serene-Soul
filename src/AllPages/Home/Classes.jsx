import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { Link } from 'react-router-dom';

const Classes = () => {

    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    return (
        <div className='py-10 bg-[#77BEAE] bg-opacity-5'>
            <div className='container mx-auto '>
                <div className='text-center'>

                    <SectionTitle title='Popular Classes' subTitle='Visit our most popular classes'></SectionTitle>
                </div>
                <div className='grid grid-cols-3 gap-5'>
                    {
                        classes.map(singleClass => (

                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img className='w-full h-56' src={singleClass.course_image} alt="Course" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {singleClass.course_name}
                                    </h2>
                                    <p>{singleClass.course_short_description}</p>
                                    <div className="card-actions py-2">
                                        <div className="badge badge-primary">Total Classes: {singleClass.total_classes}</div>
                                        <div className="badge badge-outline">Duration: {singleClass.course_duration} Weeks</div>
                                    </div>

                                    <Link to='/' className='btn btn-primary '>Enroll Now</Link>
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