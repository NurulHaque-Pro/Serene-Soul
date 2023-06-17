import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import Instructors from '../Instructors/Instructors';
import { Fade } from 'react-awesome-reveal';


const Teachers = () => {

    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('https://serene-soul-server-nurulhaque-pro.vercel.app/classes')
            .then(res => res.json())
            .then(data => setClasses(data.slice(0, 4)))
    }, [])

    const teacherInfo = classes.map(course => course.teacher);

    return (
        <div className='container mx-auto px-5'>
            <div>
                <Fade>
                    <Instructors></Instructors>
                </Fade>
            </div>
        </div>
    );
};

export default Teachers;