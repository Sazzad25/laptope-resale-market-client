import React from 'react';
import Category from '../../Category/Category';
import Banner from '../Banner/Banner';
import Section from '../Section/Section';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Section></Section>
        </div>
    );
};

export default Home;