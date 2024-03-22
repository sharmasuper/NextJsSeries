"use client"
import axios from "axios"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

function Page({ params }) {
    const { register, handleSubmit, setValue } = useForm()
    const { userId } = params

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")

    const getUserDetail = async (userId) => {
        try {
            const response = await axios.get("http://localhost:3000/api/users/" + userId)
            const userData = response.data.result
            setName(userData.name)
            setAge(userData.age)
            setEmail(userData.email)
        } catch (error) {
            console.error("Error fetching user details:", error)
        }
    }

    useEffect(() => {
        getUserDetail(userId)
    }, [userId])

    const onSubmit = async (data) => {
        try {
            const result = await axios.put("http://localhost:3000/api/users/" + userId, {
                name: data.name,
                email: data.email,
                age: data.age
            })
            
            // console.log("User updated successfully:", result.data)
            // return result.data
       
         if(result.data.success){
          alert("user information update")
         }else{
          alert("invalid data please check error") 
         }
  

        } catch (error) {
            console.error("Error updating user:", error)
        }
    }

    return (
        <div>
            <h1>Update User Detail</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={name} type="text" placeholder="User Name" {...register("name")} /> <br />
                <input defaultValue={age} type="text" placeholder="User Age" {...register("age")} /> <br />
                <input defaultValue={email} type="text" placeholder="User Email" {...register("email")} /> <br />
                <button type="submit">Change here</button>
            </form>
        </div>
    );
}

export default Page;
