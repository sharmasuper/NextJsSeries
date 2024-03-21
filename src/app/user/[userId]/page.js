
import axios from 'axios'
const GetUser = async(age) =>{

    const add = await axios.get(`http://localhost:3000/api/users/${age}`)
     const response = add.data
       return response
  }

  
async function page({params}) {

   console.log(params.userId)
   let user = await  GetUser(params.userId)
    
   console.log("User seen",user)

  let {name ,email,age} = user.result
  

  return (
    <div key={age}>
      <h1>User DEtail</h1>
     <p>{name}</p>
     <p>{email}</p>
     <p>{age}</p>
    </div>
  );
}

export default page;
