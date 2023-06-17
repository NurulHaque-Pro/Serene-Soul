import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaBeer, FaChalkboardTeacher, FaFile, FaHome, FaPenSquare, FaPlus, FaUserGraduate, FaUsers } from 'react-icons/fa';
import { AiFillDashboard } from "react-icons/ai";
import { Helmet } from 'react-helmet-async';
import logo from '../../assets/Serene-soul-main-logo.png'
import useCart from '../../Hooks/useCart';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import useTeacher from '../../Hooks/useTeacher';

const DashBoard = () => {
    const { user, loading } = useContext(AuthContext);
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    const [isTeacher] = useTeacher();

    return (
        <div className='container mx-auto'>
            <Helmet>
                <title>Serene Soul | Dashboard</title>
            </Helmet>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-[#839B8B] bg-opacity-10 py-10 text-base-content">
                        {/* Sidebar content here */}
                        <Link to='/'>
                            <img src={logo} alt="" />
                        </Link>

                        {/* Admin Menu */}
                        {isAdmin && (
                            <>
                                <li className='text-base'>
                                    <NavLink
                                        to='admindashboard'
                                        className={({ isActive }) =>
                                            isActive ? 'text-primary' : 'text-[#3b3b3b]'
                                        }
                                    >
                                        <AiFillDashboard />
                                        Admin Dashboard
                                    </NavLink>
                                </li>
                                <li className='text-base'>
                                    <NavLink
                                        to='allclasses'
                                        className={({ isActive }) =>
                                            isActive ? 'text-primary' : 'text-[#3b3b3b]'
                                        }
                                    >
                                        <FaChalkboardTeacher />
                                        All Classes
                                    </NavLink>
                                </li>
                                <li className='text-base'>
                                    <NavLink
                                        to='allusers'
                                        className={({ isActive }) =>
                                            isActive ? 'text-primary' : 'text-[#3b3b3b]'
                                        }
                                    >
                                        <FaUsers />
                                        All Users
                                    </NavLink>
                                </li>
                                <li className='text-base'>
                                    <NavLink
                                        to='addclass'
                                        className={({ isActive }) =>
                                            isActive ? 'text-primary' : 'text-[#3b3b3b]'
                                        }
                                    >
                                        <FaPlus />
                                        Add New Class
                                    </NavLink>
                                </li>
                            </>
                        )}

                        {/* Teacher Menu */}
                        {isTeacher && (
                            <>
                                <li className='text-base'>
                                    <NavLink
                                        to='teacherdashboard'
                                        className={({ isActive }) =>
                                            isActive ? 'text-primary' : 'text-[#3b3b3b]'
                                        }
                                    >
                                        <AiFillDashboard />
                                        Teacher Dashboard
                                    </NavLink>
                                </li>

                                <li className='text-base'>
                                    <NavLink
                                        to='teachersclasses'
                                        className={({ isActive }) =>
                                            isActive ? 'text-primary' : 'text-[#3b3b3b]'
                                        }
                                    >
                                        <FaFile />
                                        Uploaded Classes
                                    </NavLink>
                                </li>

                                <li className='text-base'>
                                    <NavLink
                                        to='addclass'
                                        className={({ isActive }) =>
                                            isActive ? 'text-primary' : 'text-[#3b3b3b]'
                                        }
                                    >
                                        <FaPlus />
                                        Add New Class
                                    </NavLink>
                                </li>
                            </>
                        )}

                        {/* Normal User Menu */}
                        {!isAdmin && !isTeacher && (
                            <>
                                <li className='text-base'>
                                    <NavLink
                                        to='userdashboard'
                                        className={({ isActive }) =>
                                            isActive ? 'text-primary' : 'text-[#3b3b3b]'
                                        }
                                    >
                                        <AiFillDashboard />
                                        User Dashboard
                                    </NavLink>
                                </li>
                                <li className='text-base'>
                                    <NavLink
                                        to='myclasses'
                                        className={({ isActive }) =>
                                            isActive ? 'text-primary' : 'text-[#3b3b3b]'
                                        }
                                    >
                                        <FaChalkboardTeacher />
                                        Selected Classes
                                        <span className="badge badge-secondary">+{cart.length}</span>
                                    </NavLink>
                                </li>
                            </>
                        )}

                        {/* Common Menu Items */}
                        <hr className='border-1 border-[#36c0a2] my-6' />
                        <li className='text-base'>
                            <NavLink
                                to='/'
                                className={({ isActive }) =>
                                    isActive ? 'text-primary' : 'text-[#3b3b3b]'
                                }
                            >
                                <FaHome />
                                Home
                            </NavLink>
                        </li>
                        <li className='text-base'>
                            <NavLink
                                to='/instructors'
                                className={({ isActive }) =>
                                    isActive ? 'text-primary' : 'text-[#3b3b3b]'
                                }
                            >
                                <FaUserGraduate />
                                Instructors
                            </NavLink>
                        </li>
                        <li className='text-base'>
                            <NavLink
                                to='/classes'
                                className={({ isActive }) =>
                                    isActive ? 'text-primary' : 'text-[#3b3b3b]'
                                }
                            >
                                <FaChalkboardTeacher />
                                Classes
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
