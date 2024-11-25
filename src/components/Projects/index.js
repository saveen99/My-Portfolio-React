import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to software apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'website' ?
            <ToggleButton active value="website" onClick={() => setToggle('website')}>WEBSITE</ToggleButton>
            :
            <ToggleButton value="website" onClick={() => setToggle('website')}>WEBSITE</ToggleButton>
          }
          <Divider />
          {toggle === 'software app' ?
            <ToggleButton active value="software app" onClick={() => setToggle('software app')}>SOFTWARE APP</ToggleButton>
            :
            <ToggleButton value="software app" onClick={() => setToggle('software app')}>SOFTWARE APP</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP</ToggleButton>
          }
          <Divider />
          {toggle === 'api' ?
            <ToggleButton active value="api" onClick={() => setToggle('api')}>API</ToggleButton>
            :
            <ToggleButton value="api" onClick={() => setToggle('api')}>API</ToggleButton>
          }
          <Divider />
          {toggle === 'mobile app' ?
            <ToggleButton active value="mobile app" onClick={() => setToggle('mobile app')}>MOBILE APP</ToggleButton>
            :
            <ToggleButton value="mobile app" onClick={() => setToggle('mobile app')}>MOBILE APP</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects