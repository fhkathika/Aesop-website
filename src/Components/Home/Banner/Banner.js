import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
    const bgUrl2='https://images.ctfassets.net/u1nb1km7t5q7/7clxD7eNaBZIcSC3ypABda/9de320505533faae4d6278ea02fb4e5d/Aesop_Lunar_New_Year_2022_Web_Homepage_Primary_Full_Bleed_Desktop_L_2880x1044px.jpg'
  
    const bg={
        
        background:`url(${bgUrl2})`,
        // background:`url(${bgUrl2})`,
        backgroundRepeat:'no-repeat',
      
        backgroundSize: '100% 100%',
     
        
    }
  return (
      <div style={bg} >
        <Container className='banner-text'>
        <h1>Aesop</h1>
          <Container className='banner-container'> <h2>In boldness, a bond</h2>
          <p>Celebrating the power of self-expression this Lunar New Year through gestures replete with character.</p>
</Container>
        </Container>
         
         
      </div>

  )
};

export default Banner;
