import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import ToDo from '../ToDo/ToDo';
import DetailInfo from './DetailInfo';


const Details = (props) => {
  
    const [status,setStatus]=useState(false)
   const {userId,id,title,completed}=props.details



   

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
   
      
      <Button  onClick={() => props.handleDetail(id,userId,title)
} style={{border:'1px solid gray',color:'black',margin:'10px'}}
 
      >View User</Button>
    </tr>
    </tbody>
  
{/* {userDetail} */}
    </>

  
    

  );
};

export default Details;
