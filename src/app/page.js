
'use client'
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {

  //use satate
  const [name,setname] = useState("hanuman")

  function apple () {
  setname("ganesh")
  }
  //use variable
  let change = "sharma"
  
  function Update() {
    change = "mohit"
  }
 
  return (
    <main className={styles.main}>
    <h1>Home Page</h1>     
    <h1>Event,function,and State - {name}</h1>
 <button onClick={()=>apple()}>ClickMe</button>
 {/* variable use */}
 <h2>my change - {change}</h2>
 <button onClick={Update}>ClickMe</button>
  
    </main>
  );
}

