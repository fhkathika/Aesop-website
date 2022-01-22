import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {link} from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Facebook from '@mui/icons-material/Facebook';
import './Footer.css'
// import { margin } from '@mui/system';

export default function Footer() {
   
    return (
        <footer>
       <Box color='white' px={{xs:3,sm:10}} py={{xs:5,sm:10}} bgcolor='#333' left='0' bottom='0' right='0' >
           <Container maxWidth="lg">
<Grid container spacing={5} >
<Grid item x={12} sm={4}>
    <Box borderBottom={1}>Orders and support</Box>
    <Box >Contact</Box>
    <Box >Support</Box>
    <Box >Privacy policy</Box>
</Grid>
<Grid item x={12} sm={4}>
    <Box borderBottom={1}>Services</Box>
    <Box >Contact</Box>
    <Box >Support</Box>
    <Box >Privacy policy</Box>
</Grid>
<Grid item x={12} sm={4}>
    <Box borderBottom={1}>Location preferences</Box>
    <Box >Contact</Box>
    <Box >Support</Box>
    <Box >Privacy policy</Box>
</Grid>
<Grid item x={12} sm={4}>
    <Box borderBottom={1}>About</Box>
    <Box >Contact</Box>
    <Box >Support</Box>
    <Box >Privacy policy</Box>
</Grid>
<Grid item x={12} sm={4}>
    <Box borderBottom={1}>About</Box>
    <Box >Contact</Box>
    <Box >Support</Box>
    <Box >Privacy policy</Box>
</Grid>
<Grid item x={12} sm={4}>
    <Box borderBottom={1}>Social Media</Box>
    <Box  >Login</Box>
    <Box >Register</Box>
    <Box >Messages</Box>
</Grid>
<Grid item x={12} sm={4}>
    <Box borderBottom={1}>Messages</Box>
    <Box >History</Box>
    <Box >Support</Box>
    <Box >Privacy policy</Box>
</Grid>
</Grid>

<hr />
<Box style={{display:'flex',justifyContent:'space-between'}} pt={{xs:5,sm:4}} pb={{xs:5,sm:0}}>
    
    <Box textAlign='start' pt={{xs:5,sm:10}} pb={{xs:5,sm:0}}>
    <h1>Aesop</h1>
</Box>
    <Box textAlign='end' pt={{xs:5,sm:10}} pb={{xs:5,sm:0}}>
{<Facebook  style={{color:'#F1E8E0', margin:'10px'}}/>}
{<TwitterIcon  style={{color:'#F1E8E0', margin:'10px'}}/>}
{<InstagramIcon style={{color:'#F1E8E0', margin:'10px'}}/>}
</Box>

</Box>
           </Container>
       </Box>
       </footer>
    )
}
