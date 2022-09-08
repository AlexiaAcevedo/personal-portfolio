import styled from "styled-components";

export const ContactContainer = styled.div`
    height: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1100px;
    }
`

export const ContactH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const ContactP = styled.p`
    font-size: 1rem;
    color: #fff;
    line-height: 24px;
    margin-bottom: 35px;
    text-align: center;
`

export const ContactIcons = styled.div`
    display: flex;
`

export const ContactLink = styled.a`
    color: #fff;
    margin: 10px;
    font-size: 24px;
    margin-bottom: 15px;
`

export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
`

export const ContactInfoDiv = styled.div`
    display: flex;
    align-items: center;
    margin-top: 12px;
    color: #fff;
`

export const ContactP2 = styled.p`
    font-size: 1rem;
    color: #fff;
    margin-left: 10px;
`

export const TextWrapper = styled.div`
    max-width: 540px;
`