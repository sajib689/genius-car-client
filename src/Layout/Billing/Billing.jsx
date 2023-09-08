import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer';

const Billing = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Billing;