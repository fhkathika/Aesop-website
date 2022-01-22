
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import Details from '../Details/Details';
import './ToDo.css';
const ToDo = () => {
    const[info,setInfo]=useState([]);
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => {
            setInfo(data)
            console.log(data)})
    },[])
  return (
      <div className='table-data-style'>
  <Container style={{width:'60%'}}>
      <Table style={{width:'100%',margin:'auto',border:'1px solid black'}}  size="sm">
  <thead>
    <tr>
      <th>ToDo Id</th>
      <th>Title</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  </thead>
  {
    info.map(details=><Details
    key={details.id}
    details={details}>

    </Details>)
}
</Table>

  </Container>
  <Container style={{width:'40%'}}>

     {/* <h3>Todo ID{id}</h3>
       <h3>Todo Title: {title}</h3>
       <h3>User ID{userId}</h3> 
       <h3>name {userDetail.name}</h3>
       <p>email{userDetail.email}</p> */}
    
   
  </Container>
  </div>
  );
};

export default ToDo;
