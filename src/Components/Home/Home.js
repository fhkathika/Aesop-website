import React from 'react';
import Banner from './Banner/Banner';
import Product from './Card/Product';
import Blog from './Blog/Blog';
import VideoBlog from './Blog/VideoBlog';
import StoreLocator from './StoreLocator/StoreLocator';
import QuoteBlog from './QuoteBlog/QuoteBlog';

export default function Home() {
  return <div>
        <Banner></Banner> 
    <Product></Product>
     <Blog></Blog>
     <VideoBlog></VideoBlog>
     <StoreLocator></StoreLocator>
     <QuoteBlog></QuoteBlog>
  </div>;
}
