// "use client" ismai bhi kam karga
"use client"
import styles from "./page.module.css";

import Image from "next/image";
import Versel from '../../public/vercel.svg'
import Image2 from  "./canava.png" 

export default function Home() {

console.log(Versel) 
// iss console mai dekhai to ismai src ki property bhi h jssai hum html img src ko tag kartai h to image aa jati h 
   
  return (
    <main className={styles.main}>
   
     {/* <Image src={Versel} height={300} width={500} alt="image"  />  */}

     {/* hum iss image ko HTml img tag sai bhi load karva sktai hai but next ki vo lambhi process h but yai optimization kai liy */}
   {/* <img src={Versel.src}/> */}


{/* server url Image next.config.mjs mai domain dala */}

   {/* <Image src="https://cdn.dummyjson.com/product-images/1/1.jpg"
   width={200} height={300} alt="modiji"
   /> */}
   <Image src={Image2} width="100%" height="100%" alt="media" />
   </main>
   )
}

