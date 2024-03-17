import Link from "next/link";
import './Login.css'

function layout({children}) {
  return (
    <div>
    <ul className="login-menu">
        <li>
            <h4>Login Navbar</h4>
        </li>
        <li>
            <Link href="/Login">Login Main</Link>  </li>
            <li>  <Link href="/Login/LoginStudent">Student Login</Link>  </li>
            <li>   <Link href="/Login/LoginTeacher">Teacher Login</Link>  </li>
            
    </ul>
      {children}
      {/* yai children kaya karaiga login folder kai jitnai bhi component h jaisai
       LoginStudent or LoginTeacher un sab per yai common show karvaiga */}
    </div>
  );
}

export default layout;
