
import React, { useEffect, useState } from 'react';

import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';
import '@brainhubeu/react-carousel/lib/style.css';
import { Col, Container, Row } from 'react-bootstrap';
const Product = () => {
    const [product,setProduct]=useState([])
    useEffect(()=>{
        fetch('https://serene-bayou-12088.herokuapp.com/aesopItem')
        .then(res => res.json())
        .then(data =>setProduct(data))
    },[product])

  return <>
      <Carousel
            plugins={[
              'arrows',
              {
                resolve: slidesToShowPlugin,
                options: {
                 numberOfSlides: 3
                }
              },
            ]}
            breakpoints={{
              640: {
                plugins: [
                 {
                   resolve: slidesToShowPlugin,
                   options: {
                    numberOfSlides: 1
                   }
                 },
               ]
              },
              900: {
                plugins: [
                 {
                   resolve: slidesToShowPlugin,
                   options: {
                    numberOfSlides: 2
                   }
                 },
               ]
              }
            }}
          >
              {
          product.map(singleProduct=>
            <Container>
            <Row>
            <Col xs={12} md={8} >
            <img  style={{width:'100%'}} src={singleProduct.image} />
            <p style={{fontStyle:'bold'}}>{singleProduct.title}</p>
            <p>{singleProduct.subtitle}</p>
                </Col>
                </Row>
                </Container>

          )
      }
           
        
          </Carousel>
      

  </>;
};

export default Product;
