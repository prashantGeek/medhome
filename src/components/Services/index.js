import React from 'react';
import Icon1 from '../../images/svg-4.svg';
import Icon2 from '../../images/svg-5.svg';
import Icon3 from '../../images/svg-6.svg';

import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements';

const Services = () => {
  return(
    <ServicesContainer  id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>Next Day Delivery</ServicesH2>
            <ServicesP>We Deliver your orders Super fast.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>Fitness Articles</ServicesH2>
            <ServicesP>We also tell you how to be fit with our fitness corner articles.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>Book Doctor Appointment</ServicesH2>
            <ServicesP>Search for Doctor and book Appointment</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;