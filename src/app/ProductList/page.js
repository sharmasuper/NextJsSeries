"use client"
import { useState, useEffect } from "react";
import axios from 'axios'
function Page() {
    const [Data,addData] = useState([])
  const Product = async() =>{
    const url =  await axios.get("https://dummyjson.com/products")
    const response = url.data.products
           addData(response)
    // console.log(response.products )
  }
  useEffect(()=>{
    Product()
  })
    return (
        <div>
          {Data.map((item)=>{
            return <h1>{item.title}</h1>
          })}
         
        </div>
    );
}

export default Page;
