import Link from "next/link"
import getUser from "../../../Service/getUser"


export default async function page () {
    const users = await getUser()

    return (
        <div>
            <h1>UsersLIst</h1>
            {users.map((item)=>{
                return <div key={item.id}>
                    <p>{item.firstName}</p>
                    <Link href={`/user/${item.id}`}>{item.firstName}</Link>

                    </div>
            })}
        </div>
    )
}