
import axios from 'axios'
import Link from 'next/link'

const GetUser = async() =>{
  const data = await axios.get("http://localhost:3000/api/users")
   const response = data.data
     return response
}

 async function page() {
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
            <Link href={`user/${age}`}>{name}</Link>
           </div>
        )
       })}
    </div>
  );
}

export default page;
