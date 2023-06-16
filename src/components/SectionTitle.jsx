import React from 'react';

const SectionTitle = ({title, subTitle}) => {
    return (
        <div className='py-6'>
            <p className='text-primary font-dancing text-2xl'>{subTitle}</p>
            <h2 className='text-2xl md:text-4xl'>{title}</h2>
        </div>
    );
};

export default SectionTitle;