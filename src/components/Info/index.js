import React from 'react';
import { Button } from '../ButtonElement';
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2, 
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap, 
    Img, 
    ImgWrap
} from './InfoElements'

const Info = ({
    lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description, 
    img, 
    alt, 
    primary
}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>Hello. My name is Alexia and I love to code. My interest in web development started in 2018 when I took a few Computer Science courses while I was working towards my B.S. in engineering at the University of Central Florida. <br />
                                <br />
                                Since then - I have learned many new programming languages and technologies. I consider myself a full stack software engineer, and am equally comfortable developing Python backends as I am building beautiful and efficient UIs using JavaScript and React on the frontend. <br />
                                <br /> I am a self-starter with a strong desire to learn. Passionate about writing and deploying high quality code to contribute to web applications by designing, developing, and shipping new software features.</Subtitle>
                                <BtnWrap>
                                    <Button to='home'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1 : 0}>
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default Info