import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {HeroContainer, HeroBg, VideoBg, HeroContents, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';
import {Button } from '../ButtonElements';
const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover =() => {
        setHover(!hover);
    };
        
    return (
        <HeroContainer> 
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContents>
                <HeroH1>
                    MEDICINES AT YOUR HOME!
                </HeroH1>
                <HeroP>
                    Healthcare Made Understandable, Accessible and Affordable.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        Order Now{hover ? <ArrowForward/> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContents>
        </HeroContainer>
    );
};

export default HeroSection;
