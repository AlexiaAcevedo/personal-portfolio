import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaPhone } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import {
    ContactContainer,
    ContactH1,
    ContactP,
    ContactIcons,
    ContactLink,
    ContactInfo,
    ContactInfoDiv,
    ContactP2,
    TextWrapper
} from './ContactElements';



const Contact = () => {
    return (
        <>
            <ContactContainer id='contact'>
                <ContactH1>Get In Touch</ContactH1>
                <TextWrapper>
                <ContactP>I am currently seeking new opportunities within the software development industry. I believe my work ethic and ability to quickly learn new technologies and concepts will make me a valuable addition to any dev team. Let’s connect! </ContactP>
                </TextWrapper>
                <ContactIcons>
                    <ContactLink href="https://github.com/AlexiaAcevedo" target="_blank" aria-label="Github">
                        <FaGithub />
                    </ContactLink>
                    <ContactLink href="https://www.linkedin.com/in/alexia-acevedo/" target="_blank" aria-label="LinkedIn">
                        <FaLinkedin />
                    </ContactLink>
                    <ContactLink href="https://www.instagram.com/alexiaacevedo/?hl=en" target="_blank" aria-label="Instagram">
                        <FaInstagram />
                    </ContactLink>
                </ContactIcons>
                <ContactInfo>
                    <ContactInfoDiv>
                    <MdMail /><ContactP2>Alexia.Acevedo@knights.ucf.edu</ContactP2>
                    </ContactInfoDiv>
                    <ContactInfoDiv>
                    <FaPhone /><ContactP2>+1 (954) 483-1638</ContactP2>
                    </ContactInfoDiv>
                </ContactInfo>
            </ContactContainer>
        </>
    )
}


export default Contact