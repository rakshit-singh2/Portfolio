import React from 'react';
import { Container, Grid } from '@mui/material';
import ProjectCard from '../components/ProjectCard';

const projects = [
  { title: 'NFT Marketplace', description: 'Blockchain + React.js + Node.js' },
  { title: 'Trading Bot', description: 'Blockchain + Node.js' },
  { title: 'Launchpad', description: 'Blockchain + React-Vite.js' },
  { title: 'Wallet Extension', description: 'Blockchain + React-Vite.js' },
];

const Projects = () => (
  <Container>
    <Grid container spacing={2}>
      {projects.map((project) => (
        <Grid item xs={12} sm={6} md={4} key={project.title}>
          <ProjectCard title={project.title} description={project.description} />
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Projects;
