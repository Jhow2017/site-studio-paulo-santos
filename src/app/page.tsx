import React from 'react';

//sections
import {
    Hero,
    About,
    Contact,
    Services,
    Portfolio,
} from '../components/sections';

//components
import Header from '@/components/header';
import Footer from '@/components/footer';

//@ds
import { BackToTop } from '@ds/components/global';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <Header />
            <Hero />
            <Portfolio />
            <Services />
            <About />
            <Contact />
            <Footer />
            <BackToTop />
        </div>
    );
};

export default Home;
