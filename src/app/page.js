
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
    <h1>Home Page</h1>     
  <User name="mohit props"/>
 
  <Mohit name="defference"/>
    </main>
  );
}

  const User = (props) =>{
  return (
    <div>
    <h1>User name is {props.name} </h1>
    </div>
  )
}
export const  Mohit = ({name}) =>{
  return (
    <div>
     <h1>both between props -{name} </h1>
    </div>
  )
}