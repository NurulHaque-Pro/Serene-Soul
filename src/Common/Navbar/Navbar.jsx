import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/Serene-soul-main-logo.png'

const Navbar = () => {

    const navMenuItems = <>
        <li className=''>
            <NavLink to='/' className={({ isActive }) => isActive ? 'text-primary ' : 'text-[#3b3b3b]'}>Home</NavLink>
        </li>
        <li className=''>
            <NavLink to='/instructors' className={({ isActive }) => isActive ? 'text-primary' : 'text-[#3b3b3b]'}>Instructors</NavLink>
        </li>
        <li className=''>
            <NavLink to='/classes' className={({ isActive }) => isActive ? 'text-primary' : 'text-[#3b3b3b]'}>Classes</NavLink>
        </li>
    </>

    return (
        <div className=' bg-white w-full opacity-[0.92] fixed z-10'>

            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navMenuItems}

                        </ul>
                    </div>
                    <Link to='./'>
                        <img className='h-11 md:h-20 cursor-pointer' src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" space-x-6 menu-horizontal px-1">
                        {navMenuItems}
                    </ul>
                </div>
                <div className="navbar-end gap-5">

                </div>
            </div>
        </div>
    );
};

export default Navbar;