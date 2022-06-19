import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElement'
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
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src = {Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH6>Hi, my name is</HeroH6>
                <HeroH1>Alexia Acevedo</HeroH1>
                <HeroP>I am a full stack software engineer who is a self-starter with a strong desire to learn.
                    Passionate about writing and deploying high quality code to contribute to web applications by
                    designing, developing, and shipping new software features.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="projects" 
                    onMouseEnter = {onHover} 
                    onMouseLeave = {onHover}
                    primary = 'true'
                    dark = 'true'
                    >
                        Check out my projects {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero