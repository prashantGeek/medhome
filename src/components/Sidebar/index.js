import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarRoute, SideBtnWrap, SidebarLink, SidebarMenu} from './SidebarElements';


const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
            <CloseIcon />
          </Icon>
          <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="medicines" onClick={toggle}>Medicines</SidebarLink>
                <SidebarLink to="fitness" onClick={toggle}>Fitness</SidebarLink>
                <SidebarLink to="about" onClick={toggle}>About Us</SidebarLink>
                <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to ='/signin'>Sign In</SidebarRoute>
            </SideBtnWrap>
          </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
