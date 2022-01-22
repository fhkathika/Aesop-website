import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';

export default function StoreLocator() {
  return  <div className='blog-style'>
  <Row className='blog1-row' style={{marginTop:'2%'}}>
<Col xs={12} md={4} className='blog1-text'>
    
<h1>Store locator</h1>
<p>Our consultants are available to host you in-store and provide tailored guidance on gift purchases.</p>
<a href="" className='discover-link-style'>Find a nearby store <i class="fas fa-arrow-right"></i></a>

</Col>
<Col xs={12} md={8} className='img-col'> 
<Carousel >
  <Carousel.Item className='carousel'>
    <img
      className="d-block w-100"
      src="https://www.aesop.com/u1nb1km7t5q7/40xVxq4tBdXpyJLXVTQPvO/aa8ef7a4cca7a713e12b58f1ab8cc6ea/Aesop-HK-K11-Hero-Bleed-Desktop-2880x1620px.jpg"
      alt="First slide"
    />
  
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100 carousel"
      src="https://www.aesop.com/u1nb1km7t5q7/3b6KRiDt3QpNut8LoYGgB9/1d62a7373daa8a6ba4dff6ea300b891e/Aesop-HK-Hollywood-Road-Hero-Desktop-2880x1620.jpg"
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.aesop.com/u1nb1km7t5q7/DqJCGx3tPeDqODieHw5uA/48f50fbd1758ee27990a600c131bd2ce/Aesop-HK-New-Town-Plaza-Hero-Bleed-Desktop-2880x1620px.jpg"
      alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>

</Col>
</Row>

</div>

}
