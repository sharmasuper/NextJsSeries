"use client"
import React, { useState } from 'react';

function page() {
    const [h3Style,seth3Style] = useState({backgroundColor:"green"})
  return (
    <div>
      <h1>mohit sharma</h1>
      <h2>Heading t2 in user page</h2>
      <h3 style={{backgroundColor:"red"}}>Inline css in Next js</h3>
      <h4 style={h3Style}>button style in next js use client</h4>
      <button onClick={()=>seth3Style({backgroundColor:"gray"})}>Click here</button>
    </div> 
  );
}

export default page;
