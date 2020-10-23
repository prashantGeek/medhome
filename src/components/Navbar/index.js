import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import { FaCartPlus } from 'react-icons/fa';
import {IconContext, iconContext} from 'react-icons/lib';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll';

const Navbar = ({ toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY  >=80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        };
    };
        useEffect(() => {
            window.addEventListener('scroll', changeNav)
        }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav = {scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>MedHome</NavLogo>
                <MobileIcon onClick={toggle}>
                <FaBars />
                </MobileIcon >
                <NavMenu>
                    <NavItem>
                        <NavLinks to="medicines" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Medicines</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About Us</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="fitness" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Fitness</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Signup</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="mycart"><FaCartPlus /></NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;

