import styled from "styled-components";

export const ProjectsContainer = styled.div`
    height: 1100px;
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

export const ProjectsH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const ProjectsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-rows: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-rows: 1fr;
        padding: 0 20px;
    }
`

export const ProjectsCard = styled.div`
    background: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    height: 100%;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ProjectsImg = styled.img`
    height: 200px;
    width: 380px;
    margin: 10px;
    border: 1px lightgray solid;
    border-radius: 10px;

    @media screen and (max-width: 480px) {
        display: none;
    }
`

export const ProjectsDetails = styled.div`
    display: flex;
    flex-direction: column;
`

export const ProjectName = styled.h2`
    font-size: 1.2rem;
    margin-bottom: 10px;
`

export const ProjectDescription = styled.p`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const ProjectTechStack = styled.p`
    font-size: 0.9rem;
    color: gray;
`

export const GHIconLink = styled.a`
    margin-top: 10px;
    font-size: 24px;
    color: black;
`