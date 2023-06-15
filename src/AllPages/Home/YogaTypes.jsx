import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { GiMeditation } from "react-icons/gi";
import yogaImage from '../../assets/yogaTypes.jpg'

const YogaTypes = () => {
    return (
        <div className='container mx-auto px-10'>
            <div className='py-16'>

                <div className=''>
                    <div className='mb-9'>
                        <SectionTitle title='Diverse Yoga and Meditation Practices' subTitle=' Exploring Serene Paths to Harmony'></SectionTitle>
                    </div>

                </div>


                <div className='grid grid-cols-5 gap-5 items-center'>
                    {/* 8 Yoga List */}
                    <div className='col-span-3 grid grid-cols-2 gap-5'>
                        <div className='flex items-center gap-4'>

                            <GiMeditation className='text-7xl bg-primary text-white p-3 rounded-full'></GiMeditation>

                            <div>
                                <h3 className='text-lg'>1. Hatha Yoga</h3>
                                <p className='text-primary'>Gentle, postures, breath control.</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>

                            <GiMeditation className='text-7xl bg-primary text-white p-3 rounded-full'></GiMeditation>

                            <div>
                                <h3 className='text-lg'>2. Vinyasa Yoga</h3>
                                <p className='text-primary'>Flowing, movement, breath synchronization.</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>

                            <GiMeditation className='text-7xl bg-primary text-white p-3 rounded-full'></GiMeditation>

                            <div>
                                <h3 className='text-lg'>3. Kundalini Yoga</h3>
                                <p className='text-primary'> Energy awakening, dynamic movements.</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>

                            <GiMeditation className='text-7xl bg-primary text-white p-3 rounded-full'></GiMeditation>

                            <div>
                                <h3 className='text-lg'>4. Ashtanga Yoga</h3>
                                <p className='text-primary'>Rigorous, specific sequence, strength.</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>

                            <GiMeditation className='text-7xl bg-primary text-white p-3 rounded-full'></GiMeditation>

                            <div>
                                <h3 className='text-lg'>5. Yin Yoga</h3>
                                <p className='text-primary'>Slow-paced, connective tissues, flexibility.</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>

                            <GiMeditation className='text-7xl bg-primary text-white p-3 rounded-full'></GiMeditation>

                            <div>
                                <h3 className='text-lg'>6. Restorative Yoga</h3>
                                <p className='text-primary'>Relaxing, supported poses, tension release.</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>

                            <GiMeditation className='text-7xl bg-primary text-white p-3 rounded-full'></GiMeditation>

                            <div>
                                <h3 className='text-lg'>7. Mindfulness Meditation</h3>
                                <p className='text-primary'>Present moment awareness, non-judgment.</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>

                            <GiMeditation className='text-7xl bg-primary text-white p-3 rounded-full'></GiMeditation>

                            <div>
                                <h3 className='text-lg'>8. Transcendental Meditation</h3>
                                <p className='text-primary'>Mantra repetition, deep relaxation.</p>
                            </div>
                        </div>
                    </div>
                    {/* Yoga Types Image */}
                    <div className='col-span-2'>
                        <img className='rounded shadow-xl' src={yogaImage} alt="" />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default YogaTypes;