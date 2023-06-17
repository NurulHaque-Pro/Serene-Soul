import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../components/SectionTitle';

const Instructors = () => {

    const [uniqueUser, setUniqueUser] = useState([]);

    useEffect(() => {
        fetch('https://serene-soul-server-nurulhaque-pro.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                const uniqueEmails = [...new Set(data.map(singleClass => singleClass.email))];
                const uniqueDataArray = uniqueEmails.map(email => {
                    const classesWithEmail = data.filter(singleClass => singleClass.email === email);
                    return { email, classes: classesWithEmail };
                });
                setUniqueUser(uniqueDataArray);
            });
    }, []);

    console.log(uniqueUser);




    return (
        <div className='container mx-auto py-20 px-20'>
            <Helmet>
                <title>Serene Soul | Instructors</title>
            </Helmet>
            <div className='text-center'>
                <SectionTitle title='Our Teachers' subTitle='See our instructors'></SectionTitle>
            </div>

            <div className='grid md:grid-cols-3 gap-10 pt-5'>
                {
                    uniqueUser.map(singleClass => (

                        <div key={singleClass._id} className="card bg-base-100 shadow-xl">
                            <figure><img className='w-full h-56' src={singleClass?.classes[0]?.teachersPhoto} alt="Teacher" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Name: {singleClass?.classes[0]?.name}
                                </h2>
                                <p> Email: <span className="text-primary">{singleClass?.classes[0]?.email}</span></p>
                            </div>
                        </div>
                    ))
                }
            </div>


        </div>
    );
};

export default Instructors;