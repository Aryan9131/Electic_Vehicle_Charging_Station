import React from 'react';
import { Box, Grid, Typography, Link, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'blue',
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(1),
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      {/* Copyright Section */}
      <Box textAlign="center" mt={4}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} EV Energy. All Rights Reserved.
        </Typography>
        <Box>
            <IconButton color="inherit" href="https://facebook.com" target="_blank" rel="noopener">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit" href="https://twitter.com" target="_blank" rel="noopener">
              <TwitterIcon />
            </IconButton>
            <IconButton color="inherit" href="https://instagram.com" target="_blank" rel="noopener">
              <InstagramIcon />
            </IconButton>
            <IconButton color="inherit" href="https://linkedin.com" target="_blank" rel="noopener">
              <LinkedInIcon />
            </IconButton>
          </Box>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
