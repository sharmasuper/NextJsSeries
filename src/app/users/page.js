
import axios from 'axios'
async function UserList() {
    let data = await axios .get("https://dummyjson.com/users")
    const response = data.data
     return response.users
}


 async function page() {
    const users = await UserList()
    console.log(users)

  return (
    <div>
     {users.map((item)=>{
    return   <h3 key={item.id}>{item.firstName} </h3>
     })}
    </div>
  );
}

export default page;
