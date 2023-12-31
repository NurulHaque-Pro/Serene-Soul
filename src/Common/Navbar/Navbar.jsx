import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/Serene-soul-main-logo.png'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaCartPlus } from 'react-icons/fa';
import useCart from '../../Hooks/useCart';
import useAdmin from '../../Hooks/useAdmin';
import useTeacher from '../../Hooks/useTeacher';

const Navbar = () => {


    const { user, logOut } = useContext(AuthContext)

    const [cart] = useCart();

    const [isAdmin] = useAdmin();
    const [isTeacher] = useTeacher();


    const handleSignOut = () => {
        logOut();
    }

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

        {/* {
            isAdmin && (
                <NavLink to='/admindashboard' className={({ isActive }) => isActive ? 'text-primary' : 'text-[#3b3b3b]'}>Dashboard</NavLink>
            )
        }
        {
            isTeacher && (
                <NavLink to='/teacherdashboard' className={({ isActive }) => isActive ? 'text-primary' : 'text-[#3b3b3b]'}>Dashboard</NavLink>
            )
        }
        {
            isAdmin && isTeacher && (
                <NavLink to='/userdashboard' className={({ isActive }) => isActive ? 'text-primary' : 'text-[#3b3b3b]'}>Dashboard</NavLink>
            )
        } */}

        {/* --------------------------------------- */}

        {
            user ? (
                <>
                    {isAdmin && (
                        <li className=''>
                            <NavLink
                                to='/dashboard/admindashboard'
                                className={({ isActive }) => (isActive ? 'text-primary' : 'text-[#3b3b3b]')}
                            >
                                Dashboard
                            </NavLink>
                        </li>
                    )}
                    {isTeacher && (
                        <li className=''>
                            <NavLink
                                to='/dashboard/teacherdashboard'
                                className={({ isActive }) => (isActive ? 'text-primary' : 'text-[#3b3b3b]')}
                            >
                                Dashboard
                            </NavLink>
                        </li>
                    )}
                    {!isAdmin && !isTeacher && (
                        <li className=''>
                            <NavLink
                                to='/dashboard/userdashboard'
                                className={({ isActive }) => (isActive ? 'text-primary' : 'text-[#3b3b3b]')}
                            >
                                Dashboard
                            </NavLink>
                        </li>
                    )}
                </>
            ) : null
        }

        {/* --------------------------------------- */}

        {/* {
            user && <li className=''>
                <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'text-primary' : 'text-[#3b3b3b]'}>Dashboard</NavLink>
            </li>
        } */}

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
                <div className="navbar-end gap-2">

                    <NavLink to='/dashboard/myclasses' className='text-primary flex gap-1'>
                        <FaCartPlus className='text-xl'></FaCartPlus>
                        <div className="badge p-1 rounded-full badge-secondary">+{cart.length}</div></NavLink>

                    {
                        user ?
                            <>
                                <div>
                                    <img className='w-9 h-9 md:w-10 md:h-10 cursor-pointer rounded-full' src={user?.photoURL} alt="" />
                                </div>
                                <Link className=" font-medium text-[white] md:px-8 px-2 py-1 md:py-3 bg-primary border border-primary hover:bg-[#ff6a3d00] hover:text-primary rounded"><button onClick={handleSignOut}>Logout</button></Link></>
                            :
                            <>
                                <Link to='/login' className="font-medium text-[white] md:px-8 px-2 py-1 md:py-3 bg-primary border border-primary hover:bg-[#ff6a3d00] hover:text-primary rounded">Login</Link>
                            </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;