import React from 'react';
import Navbar from '../Common/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Common/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;