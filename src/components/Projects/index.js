import React from 'react';
import TieMyFlyImg from '../../images/tie-my-fly.png';
import StockTrackerImg from '../../images/stock-tracker.png';
import WallAppImg from '../../images/wall-app.PNG';
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
                        <ProjectsImg src={WallAppImg}></ProjectsImg>
                        <ProjectsDetails>
                            <ProjectName>The Wall</ProjectName>
                            <ProjectDescription>The wall is an application that allows users to register, login, and write on a wall.</ProjectDescription>
                            <ProjectTechStack> React - Django - SQLite - Heroku - Netlify </ProjectTechStack>
                            <GHIconLink href='https://github.com/AlexiaAcevedo/wall-app' target='_blank' aria-label='The Wall'>
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