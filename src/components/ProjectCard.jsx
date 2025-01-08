import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ProjectCard = ({ title, description }) => (
  <Card>
    <CardContent>
      <Typography variant="h5">{title}</Typography>
      <Typography>{description}</Typography>
    </CardContent>
  </Card>
);

export default ProjectCard;
