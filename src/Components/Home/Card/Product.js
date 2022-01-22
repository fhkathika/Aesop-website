
import React, { useEffect, useState } from 'react';

import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import { Col, Container, Row } from 'react-bootstrap';
import SingleProduct from './SingleProduct';
import { Box } from '@mui/system';
const Product = () => {
    const [productItem,setProductItem]=useState([])
    useEffect(()=>{
        fetch('https://serene-bayou-12088.herokuapp.com/aesopItem')
        .then(res => res.json())
        .then(data =>{
           console.log(data) 
            setProductItem(data)})
    },[])

  return <div style={{marginTop:'30px'}}> 
  
      
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
        'arrows',
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
        'arrows',
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
              
         <Box>
         <img  style={{width:'100%'}} src='https://www.aesop.com/u1nb1km7t5q7/1Bvr76NWKg0CgUR2bAYwtf/0123f846ce85d98c71ffa70a60946a47/Aesop_Resurrection_Portable_Hand_Care_Hybris_Large_1584x962px__1_.png' />
            <h4 style={{fontStyle:'bold'}}>Rejuvenate Intensive Body Balm</h4>
            <p>A sumptuous moisturising balm</p>
         </Box>
            <Box>
            <img  style={{width:'100%'}} src='https://www.aesop.com/u1nb1km7t5q7/5tohXrYPG52gI48cP9TbJR/c8fd45a7665745c81dffaf5c6b5895b2/Large-PNG-Aesop-Skin-Parsley-Seed-Anti-Oxidant-Facial-Toner-100mL-large.png' />
            <h4 style={{fontStyle:'bold'}}>Rejuvenate Intensive Body Balm</h4>
            <p>A sumptuous moisturising balm</p> 
                </Box>      
            <Box>
                     
              <img  style={{width:'100%'}} src='https://www.aesop.com/u1nb1km7t5q7/4uMx0pAo5uZhfxP4V5nAzV/5e3e3fbd5877a92ee1b5b2e9105e9912/Aesop-Skin-Damascan-Rose-Facial-Treatment-25mL-Large-684x668px.png' />
              <h4 style={{fontStyle:'bold'}}>Rejuvenate Intensive Body Balm</h4>
            <p>A sumptuous moisturising balm</p> 
            </Box>    
             <Box>
             <img  style={{width:'100%'}} src='https://www.aesop.com/u1nb1km7t5q7/1Bvr76NWKg0CgUR2bAYwtf/0123f846ce85d98c71ffa70a60946a47/Aesop_Resurrection_Portable_Hand_Care_Hybris_Large_1584x962px__1_.png' />
             <h4 style={{fontStyle:'bold'}}>Rejuvenate Intensive Body Balm</h4>
            <p>A sumptuous moisturising balm</p>    
                 </Box> 
                 <Box>
                 <img  style={{width:'100%'}} src='https://www.aesop.com/u1nb1km7t5q7/1Bvr76NWKg0CgUR2bAYwtf/0123f846ce85d98c71ffa70a60946a47/Aesop_Resurrection_Portable_Hand_Care_Hybris_Large_1584x962px__1_.png' />
                 <h4 style={{fontStyle:'bold'}}>Rejuvenate Intensive Body Balm</h4>
            <p>A sumptuous moisturising balm</p> 
            </Box>   
            <Box>
            <img  style={{width:'100%'}} src='https://www.aesop.com/u1nb1km7t5q7/2RdKQmpPtqVC2lVLtCeott/3841f8985a8decb737794e843b3239d3/Aesop-Skin-Mandarin-Facial-Hydrating-Cream-60mL-large.png' />
            <h4 style={{fontStyle:'bold'}}>Rejuvenate Intensive Body Balm</h4>
            <p>A sumptuous moisturising balm</p> 
            </Box>    
                
  

           
        
          </Carousel>
      

  </div>;
};

export default Product;
