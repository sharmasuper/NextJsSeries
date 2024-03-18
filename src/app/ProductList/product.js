"use client"
import React from 'react';

function Product({title}) {
    console.log("title",title)
    
  return (
    <div>
     <button onClick={()=>alert(title,"title")}>Click</button>
     <h1>title - evet - {title}</h1>
    </div>
  );
}

export default Product;
