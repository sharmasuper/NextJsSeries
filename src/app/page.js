// "use client" ismai bhi kam karga

import { API_Base_Url } from "@/config/constant";
import styles from "./page.module.css";

export default function Home() {

 // console.log(process.env)     //environment variables ko check karnai kai liy
//  console.log(process.env.server_Password)
//esai hum variables bhi declaire karkai condition laga sktai h
  console.log(process.env.sharma_password)
  

  return (
    <main className={styles.main}>
      {
        process.env.NODE_ENV === "development" ? <h1>You are on Development</h1> : <h1>Environment Variables in Next js production </h1>
      }
    <h1>{API_Base_Url}</h1>
   </main>
   )
}



