import axios from 'axios'


 async function getUser() {

    const data = await axios.get("https://dummyjson.com/users")
    const response = data.data.users
         return response
}

export default getUser;
