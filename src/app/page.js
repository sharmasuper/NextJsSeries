
import styles from "./page.module.css";
import customer from'./custom.module.css'
import other from  './other.module.css'
import outside from '@/style/outside.module.css'

export default function Home() {
  

  
  return (
    <main className={styles.main}>
   
  <h1 className={customer.headers} >style and css with Next js</h1>
  <h2 className={other.headers}>Heading 2 in main home page</h2>
  <h3 className={outside.headers}>outside import module class use  </h3>
  
    
    </main>
  );
}

