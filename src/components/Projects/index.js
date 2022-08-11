import React from 'react';
import TieMyFlyImg from '../../images/tie-my-fly.png';
import StockTrackerImg from '../../images/stock-tracker.png';
import ItSolutionsImg from '../../images/it-solutions.png';
import { FaGithub } from 'react-icons/fa';
import {
    ProjectsContainer,
    ProjectsH1,
    ProjectsWrapper,
    ProjectsCard,
    ProjectsImg,
    ProjectsDetails,
    ProjectName,
    ProjectDescription,
    ProjectTechStack,
    GHIconLink
} from './ProjectsElements';


const Projects = () => {
    return (
        <>
            <ProjectsContainer>
                <ProjectsH1 id='projects'>Projects</ProjectsH1>
                <ProjectsWrapper>
                    <ProjectsCard>
                        <ProjectsImg src={ItSolutionsImg}></ProjectsImg>
                        <ProjectsDetails>
                            <ProjectName>IT Solutions</ProjectName>
                            <ProjectDescription>Single page web application that allows a user to apply to open positions within the IT industry. This is a test application built with limited functionality. Built using dummy text and data.</ProjectDescription>
                            <ProjectTechStack> React - Styled Components - Flask - MySQL - AWS - Netlify </ProjectTechStack>
                            <GHIconLink href='https://github.com/AlexiaAcevedo/it-solutions-web-app' target='_blank' aria-label='IT Solutions'>
                                <FaGithub />
                            </GHIconLink>
                        </ProjectsDetails>
                    </ProjectsCard>
                    <ProjectsCard>
                        <ProjectsImg src={TieMyFlyImg}></ProjectsImg>
                        <ProjectsDetails>
                            <ProjectName>TieMyFly</ProjectName>
                            <ProjectDescription>Social media web application that allows a user to share their fly tying recipes with other fly fishermen within the fishing community.</ProjectDescription>
                            <ProjectTechStack>Bootstrap - Flask - MySQL - AWS</ProjectTechStack>
                            <GHIconLink href='https://github.com/AlexiaAcevedo/tie-my-fly-social-media-web-app' target='_blank' aria-label='TieMyFly'>
                                <FaGithub />
                            </GHIconLink>
                        </ProjectsDetails>
                    </ProjectsCard>
                    <ProjectsCard>
                        <ProjectsImg src={StockTrackerImg}></ProjectsImg>
                        <ProjectsDetails>
                            <ProjectName>Stock Tracker</ProjectName>
                            <ProjectDescription>Web application to help a user research and save favorite stocks.</ProjectDescription>
                            <ProjectTechStack>Bootstrap - Django - SQLite - iex cloud API</ProjectTechStack>
                            <GHIconLink href='https://github.com/AlexiaAcevedo/stock-tracker-web-app' target='_blank' aria-label='Stock Tracker'>
                                <FaGithub />
                            </GHIconLink >
                        </ProjectsDetails>
                    </ProjectsCard>
                </ProjectsWrapper>
            </ProjectsContainer>
        </>
    )
}

export default Projects