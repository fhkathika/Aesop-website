import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './Blog.css'
export default function Blog() {
  return <div className='blog-style'>
       <Row className='blog1-row'>
    <Col xs={12} md={4} className='blog1-text'>
         <small>The value of time</small>
    <h1>Healthy skin cannot be rushed</h1>
    <p>Years of contemplation and rigour go into each Aesop formulation–hydrators are no exception. Scientifically validated ingredients, combined with acquired wisdom, impart lasting benefits.</p>
   <a href="" className='discover-link-style'>Discover deliberate nourishment  <i class="fas fa-arrow-right"></i></a>
 
    </Col>
    <Col xs={12} md={8} className='img-col' > <img  className='img1' src="https://www.aesop.com/u1nb1km7t5q7/2a9toBA6YVvZPntYn1qdLH/b5f611688860aee184a8b519f298ee04/Aesop_Healthy_Skin_Nourish_2022_Web_Homepage_Secondary_Warm_Mid_Desktop_2560x1440px.jpg" alt=""/></Col>
  </Row>
  
</div>

}
