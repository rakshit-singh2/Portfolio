import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const Contact = () => (
  <Container>
    <Typography variant="h4" gutterBottom>
      Contact Me
    </Typography>
    <TextField fullWidth label="Name" margin="normal" />
    <TextField fullWidth label="Email" margin="normal" />
    <TextField fullWidth label="Message" margin="normal" multiline rows={4} />
    <Button variant="contained" color="primary">
      Submit
    </Button>
  </Container>
);

export default Contact;
