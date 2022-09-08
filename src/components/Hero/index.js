import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button1} from '../ButtonElement'
import {
    HeroContainer, 
    HeroBg, 
    VideoBg,
    HeroContent,
    HeroH6,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';

const Hero = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id='hero'>
            <HeroBg>
                <VideoBg autoPlay loop muted src = {Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH6>Hi, my name is</HeroH6>
                <HeroH1>Alexia Acevedo</HeroH1>
                <HeroP>I am a software engineer with both, front-end and back-end development skills based in Miami, FL.
                </HeroP>
                <HeroBtnWrapper>
                    <Button1 to="projects" 
                    onMouseEnter = {onHover} 
                    onMouseLeave = {onHover}
                    primary = 'true'
                    dark = 'true'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    >
                        Check out my projects {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button1>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero