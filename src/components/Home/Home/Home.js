import React from 'react';
import Header from '../Header/Header';
import '../Home.css';
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HomeServices></HomeServices>
        </div>
    );
};

export default Home;