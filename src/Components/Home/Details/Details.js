import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import ToDo from '../ToDo/ToDo';
import DetailInfo from './DetailInfo';


const Details = ({details}) => {
    const [status,setStatus]=useState(false)
   const {userId,id,title,completed}=details
const [userDetail,setUserDetail]=useState([])
const handleDetail=(id)=>{

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res=>res.json())
    .then(data=>setUserDetail(data))
}

   

    useEffect(()=>{
        if(completed===false){
            setStatus('incomplete')
        }
        else{
            setStatus('completed')
        }
    },[])
  return (
   <> 
     
  <tbody >
     
    <tr  >
      <td>{id}</td>
      <td>{title}</td>
      <td>{status}</td>
      <Button  onClick={() => handleDetail(id)} style={{border:'1px solid gray',color:'black',margin:'10px'}}
 
      >View User</Button>
    </tr>
    </tbody>

{userDetail}
    </>

  
    

  );
};

export default Details;
