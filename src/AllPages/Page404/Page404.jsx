import React from 'react';
import image404 from '../../assets/page404.png'
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div>
            <main class="h-[450px] pt-20 w-full flex flex-col items-center">
                <img className='w-[300px] md:w-[400px] mx-auto' src={image404} alt="" />
                <p className="text-xl max-w-xl text-center font-semibold md:text-3xl">Oops! It looks like the page you're trying to access isn't available.</p>
                <button class="mt-10">

                    <Link className="font-medium btn btn-outline btn-primary" to="/">Go Home</Link>
                </button>

            </main>
        </div>
    );
};

export default Page404;