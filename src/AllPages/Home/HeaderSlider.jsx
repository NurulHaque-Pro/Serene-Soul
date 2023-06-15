import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slider1 from '../../assets/slider-bg1.jpg'
import slider2 from '../../assets/slider-bg2.jpg'
import slider3 from '../../assets/slider-bg3.jpg'
import slider4 from '../../assets/slider-bg4.jpg'
import slider5 from '../../assets/slider-bg5.jpg'

import { Autoplay, Pagination, Navigation } from "swiper";

const HeaderSlider = () => {
    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#6BB8A7", 
                    "--swiper-pagination-color": "#6BB8A7" 
                }}
                spaceBetween={300}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide style={{
                    backgroundImage: `url(${slider5})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>
                    <div className=' bg-black flex items-center bg-opacity-50'>

                        <div className='max-w-3xl mx-auto text-center text-white flex flex-col justify-center pt-16 px-5 h-[650px] md:h-[620px] space-y-5'>
                            <h2 className='text-4xl md:text-5xl'>"Discover Inner Peace"</h2>
                            <p>Immerse yourself in the serene world of yoga and meditation. Experience tranquility and find balance as you embark on a journey towards inner peace with our expert instructors.</p>
                            <button className='btn btn-primary w-[150px] mx-auto hover:bg-transparent hover:text-primary border border-primary '>View Classes</button>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{
                    backgroundImage: `url(${slider4})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>
                    <div className=' bg-black flex items-center bg-opacity-50'>

                        <div className='max-w-3xl mx-auto text-center text-white flex flex-col justify-center pt-16 px-5 h-[650px] md:h-[620px] space-y-5'>
                            <h2 className='text-4xl md:text-5xl'>"Nurture Your Well-being"</h2>
                            <p>Embrace self-care and prioritize your well-being with our yoga and meditation classes. Cultivate mindfulness, reduce stress, and enhance your overall health while basking in the serenity of our peaceful sanctuary.</p>
                            <button className='btn btn-primary w-[150px] mx-auto hover:bg-transparent hover:text-primary border border-primary '>View Classes</button>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{
                    backgroundImage: `url(${slider2})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>
                    <div className=' bg-black flex items-center bg-opacity-50'>

                        <div className='max-w-3xl mx-auto text-center text-white flex flex-col justify-center pt-16 px-5 h-[650px] md:h-[620px] space-y-5'>
                            <h2 className='text-4xl md:text-5xl'>"Awaken Your Mind and Body"</h2>
                            <p>Ignite your spirit and rejuvenate your soul through the transformative power of yoga and meditation. Unleash your inner potential and achieve harmony of mind, body, and spirit with our carefully crafted classes.</p>
                            <button className='btn btn-primary w-[150px] mx-auto hover:bg-transparent hover:text-primary border border-primary '>View Classes</button>

                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    )
};

export default HeaderSlider;