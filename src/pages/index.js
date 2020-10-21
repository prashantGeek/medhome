import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import MedicineSection from '../components/MedicineSection';
import { homeObjOne,homeObjTwo} from '../components/MedicineSection/data';

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
        </>
    );
};

export default Home;
