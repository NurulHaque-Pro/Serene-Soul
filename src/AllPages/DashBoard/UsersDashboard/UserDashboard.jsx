import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const UserDashboard = () => {
    
    const {user} = useContext(AuthContext)

    return (
        <div>
            <Helmet>
                <title>Serene Soul | User Dashboard</title>
            </Helmet>
            <div className='text-center'>
                <SectionTitle title={`${user.displayName}`} subTitle='Welcome'></SectionTitle>
            </div>
        </div>
    );
};

export default UserDashboard;