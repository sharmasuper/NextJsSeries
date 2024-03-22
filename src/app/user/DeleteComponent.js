'use client'
import axios from 'axios';
import React from 'react';

function DeleteComponent({age}) {

const deleteUser = async() =>{
 const url =  await axios.delete("http://localhost:3000/api/users/"+age)
    const response = await url.data
    //console.log("response",response)
    //   return response
   console.log(response)
    if(response.success){

        alert("User is deleted")
    }else{
        alert("server Error")
    }
}


  return (
    <div>
      <button onClick={deleteUser}>Delete</button>
    </div>
  );
}

export default DeleteComponent;
