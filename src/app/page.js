'use client'
import styles from "./page.module.css";
import customer from'./custom.module.css'
import { useState } from "react";

export default function Home() {

  const [state,setState] = useState("red")
  const {orange} = customer
    
  return (
    <main className={styles.main}>
   
  <h1 className={state==="red"?customer.red:customer.green} >style and css with Next js</h1>
  <h1 style={{backgroundColor:state==="red"?"red":"green"}}>style background property</h1>
  

  <button onClick={()=>setState("green")}>Change here</button>
 
  {/* id kai base per style condition */}

 <h1 id={customer.orange}>heading 3 id is comming here</h1>

 <h1 id={orange}>heading 3 id is comming here</h1>
    
    </main>
  );
}

