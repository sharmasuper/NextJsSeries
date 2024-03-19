// "use client" ismai bhi kam karga

import styles from "./page.module.css";
import Versel from '../../public/vercel.svg'
import {Pinyon_Script} from 'next/font/google'

const roboto =  Pinyon_Script({
  weight:"400",
  subsets:['latin'],
  display:'swap'
})

console.log(roboto)

export default function Home() {

console.log(Versel) 
   // iss console mai dekhai to ismai src ki property bhi h jssai hum html img src ko tag kartai h to image aa jati h 
   
  return (
    <main className={styles.main}>
   <h1>font optimazation in Next</h1>
   {/* <h1 style={{fontFamily:'Roboto',fontWeight:100}}>Font with Link Tag in Next</h1> */}
     <h1 className={roboto.className}>font with next js font feature</h1>
     <img src="/canava.png"/>
   </main>
   )
}



