// "use client"  
//use client component per hum async or await ka direct use nahi kar sktai h isli hum file ko import karvaigai for dlelte
import axios from 'axios'
import Link from 'next/link'
import DeleteComponent from './DeleteComponent'

const GetUser = async() =>{
  const data = await axios.get("http://localhost:3000/api/users")
   const response = data.data
     return response
}

 async function page() {                             //client component per hum issai direct call nahi kar sktai h notebook mai deko
    const user = await GetUser();

    console.log("rUser",user)

    
  return (
    <div>
      <h1>User List</h1>
       {user.map((data)=>{
        const {age,name,email} = data
        return (
           <div key={age}>
            <p>{name}</p>
            <p>{email}</p>
            <Link href={`user/${age}`}>{name}</Link> <br/>
            <Link href={`user/${age}/Update`}>Edit</Link>
       <pre>

       </pre>
        <DeleteComponent age={age}/>

           </div>
        )
       })}
    </div>
  );
}

export default page;
