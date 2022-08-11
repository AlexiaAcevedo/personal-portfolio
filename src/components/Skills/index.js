import React from 'react';
import AWSIcon from '../../images/aws.png';
import BootstrapIcon from '../../images/bootstrap.png';
import CSSIcon from '../../images/css.png';
import DjangoIcon from '../../images/django.png';
import FlaskIcon from '../../images/flask.png';
import HTMLIcon from '../../images/html.png';
import JavascriptIcon from '../../images/javascript.png';
import MySQLIcon from '../../images/mysql.png';
import PythonIcon from '../../images/python.png';
import ReactIcon from '../../images/react-icon.png';
import NodeIcon from '../../images/node.png';
import {
    SkillsContainer,
    SkillsH1,
    SkillsWrapper,
    SkillsCard,
    SkillsIcon,
    CardDiv
} from './SkillsElements';

const Skills = () => {
    return (
        <>
            <SkillsContainer id='skills'>
                <SkillsH1>My Tech Stack</SkillsH1>
                <SkillsWrapper>
                    <SkillsCard>
                        <CardDiv>
                            <SkillsIcon src={PythonIcon}/>
                            <SkillsIcon src={FlaskIcon}/>
                        </CardDiv>
                        <CardDiv>
                            <SkillsIcon src={DjangoIcon}/>
                            <SkillsIcon src={MySQLIcon}/>
                        </CardDiv>
                    </SkillsCard>
                    <SkillsCard>
                        <CardDiv>
                            <SkillsIcon src={ReactIcon}/>
                            <SkillsIcon src={JavascriptIcon}/>
                        </CardDiv>
                        <CardDiv>
                            <SkillsIcon src={NodeIcon}/>
                        </CardDiv>
                    </SkillsCard>
                    <SkillsCard>
                        <CardDiv>
                            <SkillsIcon src={HTMLIcon}/>
                            <SkillsIcon src={CSSIcon}/>
                        </CardDiv>
                        <CardDiv>
                            <SkillsIcon src={BootstrapIcon}/>
                            <SkillsIcon src={AWSIcon}/>
                        </CardDiv>
                    </SkillsCard>
                </SkillsWrapper>
            </SkillsContainer>
        </>
    )
}


export default Skills