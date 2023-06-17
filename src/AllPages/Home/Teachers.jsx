import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import Instructors from '../Instructors/Instructors';


const Teachers = () => {

    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data.slice(0, 4)))
    }, [])

    const teacherInfo = classes.map(course => course.teacher);

    return (
        <div className='container mx-auto px-5'>
            <div>
                <Instructors></Instructors>
            </div>
        </div>
    );
};

export default Teachers;