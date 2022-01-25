
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import Details from '../Details/Details';
import './ToDo.css';
const ToDo = () => {
    const[info,setInfo]=useState([]);
    const [searchCustomer,setSearchCustomer]=useState(info)
    const [userDetail,setUserDetail]=useState({})
    const handleDetail=(id,userId,title)=>{

      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res=>res.json())
      .then(data=>{
        data.userId=userId
        data.title=title
        console.log(data)
     
        setUserDetail(data)
       
     })
  }
    //load data
    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then(res => res.json())
    //     .then(data => {
    //         setInfo(data)
    //         console.log(data)})
    // },[])
    //search customer
    useEffect(()=>{
    
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => {
        setInfo(data)
        setSearchCustomer(data)
          console.log(data)})
  },[])
    const handleSearchCustomer=(e)=>{
      const customer=e.target.value
      let result = [];
console.log(customer);
result = info.filter((data) => {
return data.title.search(customer) != -1 ;
});
      setSearchCustomer(result)

    }
  return (
    <>
    <div>
       <input style={{width:'300px',padding:'10px',margin:'20px',borderRadius:'20px'}} onChange={(e) =>handleSearchCustomer(e)} placeholder="Search..."></input>
    </div>
      <Box className='table-data-style'>
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
    searchCustomer.map(details=><Details
    key={details.id}
    details={details}
    handleDetail={handleDetail}>

    </Details>)
}
</Table>

  </Container>
  <Container style={{width:'30%',height:'300px',border:'1px solid black',position:'fixedTop',textAlign:'start'}}>
  
     <p>Todo ID<span style={{marginLeft:'10%'}}>{userDetail.id}</span></p>
     <p>Todo Title<span style={{marginLeft:'10%'}} > {userDetail.title}</span></p>
     <p>UserId <span style={{marginLeft:'10%'}} >{userDetail.userId}</span></p>
     <p>Name<span style={{marginLeft:'10%'}} >{userDetail.name}</span></p>
     
       <p>Email <span style={{marginLeft:'10%'}} >{userDetail.email}</span></p> 
       {/* <h3>name {info.userDetail.name}</h3>
       <p>email{info.TableuserDetail.email}</p> */}
    
   
  </Container>
  </Box>
  </>
  );
};

export default ToDo;
