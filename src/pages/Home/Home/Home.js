import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import OurServices from '../OurServices/OurServices';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <OurServices></OurServices>
            <Footer></Footer>
        </div>
    );
};

export default Home;