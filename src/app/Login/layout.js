'use client'
import Link from "next/link";
import './Login.css'
import { usePathname } from "next/navigation";

function layout({children}) {

const pathName = usePathname()
console.log(pathName)

  return (
    <div>
       {pathName != "/Login/LoginTeacher"?
         <ul className="login-menu">
         <li>
             <h4>Login Navbar</h4>
         </li>
         <li>
             <Link href="/Login">Login Main</Link>  </li>
             <li>  <Link href="/Login/LoginStudent">Student Login</Link>  </li>
             <li>   <Link href="/Login/LoginTeacher">Teacher Login</Link>  </li>
       </ul>
       :
       <Link href="/Login">Go To Main Login Page</Link>
        // null
    }
      {children}
     
    </div>
  );
}

export default layout;
