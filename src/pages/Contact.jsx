import React from "react";
import { Container, TextField, Button, Typography, Stack } from "@mui/material";

const Contact = () => {
  return (
    <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        FormSubmit Demo
      </Typography>
      <form
        action="https://formsubmit.co/f0fa9848164c196456b945cae75bbd82"
        method="POST"
        target="_blank"
      >
        <Stack spacing={2}>
          <Stack direction="row" spacing={2}>
            <TextField
              fullWidth
              name="name"
              label="Full Name"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              name="email"
              type="email"
              label="Email Address"
              variant="outlined"
              required
            />
          </Stack>
          <TextField
            fullWidth
            name="message"
            label="Your Message"
            variant="outlined"
            multiline
            rows={10}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
          >
            Submit Form
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default Contact;
