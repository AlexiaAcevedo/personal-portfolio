import React from 'react';
import { Button2 } from '../ButtonElement';
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
                                <Subtitle darkText={darkText}>I am a full stack software engineer with a strong sense of ownership and an eagerness to learn, improve and innovate. I am equally comfortable developing back-ends as I am building beautiful and efficient user-interfaces on the front-end.  <br />
                                <br />I specialize in building efficient, responsive, and secure software. I have experience with API development and testing, database design and integration, and more, deployed in a scalable, secure manner using AWS. 
                                Experienced collaborating with teammates and other stakeholders in an agile environment to ensure customer satisfaction. <br/>
                                <br/>I enjoy fishing, hiking, gaming and spending time with my 1 year old Labrador, Colter.
                                </Subtitle>
                                <BtnWrap>
                                    <Button2 to='contact'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1 : 0}>
                                    Let's get in touch</Button2>
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