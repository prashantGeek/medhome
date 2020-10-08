import React from 'react';
import { FaBars } from 'react-icons/fa';
import { FaCartPlus } from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = ({ toggle}) => {
    return (
        <>
           <Nav>
             <NavbarContainer>
                 <NavLogo to='/'>MedHome</NavLogo>
                 <MobileIcon onClick={toggle}>
                   <FaBars />
                 </MobileIcon >
                 <NavMenu>
                    <NavItem>
                        <NavLinks to="medicines">Medicines</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="fitness">Fitness</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="about">About Us</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup">Signup</NavLinks>
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
        </>
    );
};

export default Navbar;
