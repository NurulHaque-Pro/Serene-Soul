import React from 'react';
import HeaderSlider from './HeaderSlider';
import YogaTypes from './YogaTypes';
import Classes from './Classes';
import Teachers from './Teachers';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Serene Soul | Home</title>
            </Helmet>
            <HeaderSlider></HeaderSlider>
            <YogaTypes></YogaTypes>
            <Classes></Classes>
            <Teachers></Teachers>
        </div>
    );
};

export default Home;