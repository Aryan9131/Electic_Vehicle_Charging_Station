import React from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

const ContactUs = () => {
  return (
    <Box
      style={styles.background}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "90vh", backgroundColor:"white" }}
    >
      <Container sx={{width:{xs:'90vw',md:'50vw'},boxShadow:'1px 1px 10px grey', padding:'15px 0px'}}>
        <Typography variant="h4" style={styles.header}>
          Contact Us
        </Typography>
        <form >
          <TextField
            fullWidth
            label="Your Name"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            margin="normal"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
           
          >
            Submit
          </Button>
        </form>
      </Container>
    </Box>
  );
};

const styles = {
  background: {
    backgroundImage: "url('https://example.com/ev-station-bg.jpg')", // Replace with your image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  button: {
    marginTop: "20px",
  },
};

export default ContactUs;
