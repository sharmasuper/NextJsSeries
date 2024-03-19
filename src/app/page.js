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
    <h2>Export static Html page with Build</h2>
   </main>
   )
}



