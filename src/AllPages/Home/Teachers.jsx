import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';


const Teachers = () => {

    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data.slice(0, 4)))
    }, [])

    const teacherInfo = classes.map(course => course.teacher);

    return (
        <div className='container mx-auto py-14'>
            <div>
                <SectionTitle title='Meet Our Teachers' subTitle='A good teacher can shine your health'></SectionTitle>
            </div>
            <div>
                {
                    teacherInfo.map(teacher => (
                        <h2></h2>
                    ))
                }
            </div>
        </div>
    );
};

export default Teachers;