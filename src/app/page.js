
'use client'
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {

  //use satate
  const [name,setname] = useState("hanuman")

  function apple () {
  setname("ganesh")
  }
  
 const InnerComponent = () =>{
  return (
    <>
     <h1>Inner - Component Use</h1>
    </>
  )
 }
 
  return (
    <main className={styles.main}>
    <h1>Home Page</h1>     
    <h1>Event,function,and State - {name}</h1>
 <button onClick={()=>apple()}>ClickMe</button>
 
 <InnerComponent/>
 {/* 2nd method */}
 {InnerComponent()}
 
    </main>
  );
}

