import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper,FooterLinkTitle, FooterLinkItems, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements';
import {animateScroll as scroll} from 'react-scroll';


const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
};
  return(
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About MedHome</FooterLinkTitle>
                <FooterLink to="/signin">Description</FooterLink>
                <FooterLink to="/signin">Fitness</FooterLink>
                <FooterLink to="/signin">Privacy Policies</FooterLink>
                <FooterLink to="/signin">Terms and Conditions</FooterLink>
                <FooterLink to="/signin">Contact</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Our Services</FooterLinkTitle>
                <FooterLink to="/signin">Order Medicines</FooterLink>
                <FooterLink to="/signin">Book Appointments</FooterLink>
                <FooterLink to="/signin">Fitness</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              Medhome
            </SocialLogo>
            <WebsiteRights>
              MedHome © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="//www.facebook.com" target="_blank"
              aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="//www.instagram.com" target="_blank"
              aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="//www.youtube.com"            target="_blank"
              aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="//www.twitter.com" target="_blank"
              aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="//www.linkedin.com" target="_blank"
              aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer