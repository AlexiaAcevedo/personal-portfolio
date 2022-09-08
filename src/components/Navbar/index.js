import React from 'react'
import {FaBars} from 'react-icons/fa'
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon,
    NavMenu, 
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
    } from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer id='/'>
                    <NavLogo to="hero"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}>
                        Alexia
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="skills"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}>Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}>Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}>Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/files/alexia-acevedo-resume.pdf" target="_blank" download>Resume</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar