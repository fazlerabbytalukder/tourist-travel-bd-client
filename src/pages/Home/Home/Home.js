import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import OurPartners from '../OurPartners/OurPartners';
import OurServices from '../OurServices/OurServices';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <OurServices></OurServices>
            <Testimonials></Testimonials>
            <OurPartners></OurPartners>
            <Footer></Footer>
        </div>
    );
};

export default Home;