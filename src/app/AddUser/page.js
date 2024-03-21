"use client"
// Import axios at the top of the file
import axios from 'axios';
import { useForm } from "react-hook-form"

function Page() {

    const { register, handleSubmit } = useForm({
        defaultValues: {
            firstName: "",
            age : "20",
            email : "sharma@gmail.com"
        }
    });

    const onSubmit = async (data) => {
        try {
            const response = await axios.post("http://localhost:3000/api/users",{
                name : data.firstName,
                 email : data.email,
                 age: data.age

            });
            const newUser = response.data;
           console.log("respos check",response.data)
        if(newUser.success){
            alert("new User Added")
        }else{
            alert("some error with data please check and try again")
        }


            console.log(newUser);
        } catch (error) {
            console.error("Error adding user:", error);
        }
    };

    return (
        <div>
            <h1>Add New User</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='text' {...register("firstName")} placeholder='Enter Name'/> <br/>
                <input type='text' placeholder='Enter age' {...register("age")}/> <br/>
                <input type='text' placeholder='Enter Email'  {...register("email")} /> <br/>
                <button type='submit' className='btn btn-primary'>Add User</button>
            </form>
        </div>
    );
}

export default Page;
