import React from 'react';

const DetailInfo = ({userDetail}) => {
const {name,email}=userDetail
  return (
<div style={{border:'1px solid black', padding:'20px'}}>
       {/* <h3>Todo ID{id}</h3>
       <h3>Todo Title: {title}</h3>
       <h3>User ID{userId}</h3> */}
       <h3>name {name}</h3>
       <p>email{email}</p>
       
   </div> )
  
};

export default DetailInfo;
