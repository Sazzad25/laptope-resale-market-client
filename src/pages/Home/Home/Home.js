import React from 'react';
import Category from '../../Category/Category';
import Animation from '../Animation/Animation';
import Banner from '../Banner/Banner';
import Carousel from '../Carousel/Carousel';
import Countdown from '../Countdown/Countdown';
import Section from '../Section/Section';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Animation></Animation>
            <Countdown></Countdown>
            <Category></Category>
            <Section></Section>
            <Carousel></Carousel>
        </div>
    );
};

export default Home;