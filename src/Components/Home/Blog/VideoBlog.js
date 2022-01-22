import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Blog.css'
export default function VideoBlog() {

    return <div className='blog2-style'>
    <Row className='blog1-row'>
    <Col xs={12} md={8} className='video1-col'>
         <video style={{width:'100%',marginLeft:'0px'}} controls  autoPlay   >
    <source src="https://player.vimeo.com/external/665481880.hd.mp4?s=60a49771d272d24e7e8276ce610c3dd6d14d6d08&amp;profile_id=175" type="video/mp4"/>
        </video>
        </Col>
 <Col xs={12} md={4} className='blog2-text'>
      <small>The Athenaeum</small>
 <h1>How to curate a skin care regimen </h1>
 <p>A well-considered, attentive skin care regimen takes time—a resource that is as finite and precious as our skin. But be assured: time spent caring for the self is always time well spent.</p>
<a href="" className='discover-link-style' style={{width:'22rem',marginTop:'20px'}}>Read our guide <i class="fas fa-arrow-right"></i></a>

 </Col>

</Row>

</div>

}
