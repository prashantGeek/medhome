import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import MedicineSection from '../components/MedicineSection';
import { homeObjOne,homeObjTwo, homeObjThree} from '../components/MedicineSection/data';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen= {isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <MedicineSection {...homeObjOne}/>
            <MedicineSection {...homeObjTwo}/>
            <Services />
            <MedicineSection {...homeObjThree}/>    
            <Footer />
            
        </>
    );
};

export default Home;
