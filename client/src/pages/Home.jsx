import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import bgImage from '../assets/main.jpg';
import userhome1 from '../assets/userhome1.webp'
import { useSelector } from 'react-redux';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home() {

  const { authUser, token } = useSelector((state) => state.Auth);
  console.log(authUser, token)


  return (
    <Box >
      <Grid
        container
        sx={{ flexGrow: 1, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2 }}
      >
        <Grid
          item
          size={12}
          sx={{
            display: 'flex',
            flexWrap: 'nowrap',
            justifyContent: "center",
            alignItems: 'center',
            backgroundImage: `url(/background-1.webp)`,
            backgroundSize: 'fit',
            backgroundPosition: 'center',
            height: '85vh',
            width: "100%",
          }}
        >
          <Item square elevation={0}
            sx={{
              display: 'flex',
              flexDirection: "column",
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius:'5px',
              backgroundColor: "#000000b5",
              width: { xs: "90%", sm: "60%", md: "30%" },
            }}
          >
            <Typography sx={{ color: "#E8F5E9", fontSize: { xs: '20px', md: "30px", lg: "40px" } }}>
              Locate the EV Bunks
            </Typography>
            <Box sx={{ display: "flex",marginTop:{xs:'5px', md:'0'}, justifyContent: "space-evenly", width: "100%" }}>
              <Button
                sx={{ color: "#E8F5E9", backgroundColor: "blue" }}
                href='admin/signin'
              >
                Admin Login
              </Button>
              <Button
                sx={{ color: "#E8F5E9", backgroundColor: "blue" }}
                href='user/signin'
              >
                User Login
              </Button>
            </Box>
          </Item>
        </Grid>

      </Grid>
    </Box>
  );
}
