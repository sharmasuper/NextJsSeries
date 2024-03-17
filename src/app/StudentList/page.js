import Link from "next/link";


function page() {
    const Add = ["Anil","Peter","Sam","Burce"]
  const Store =   Add.map((item,index)=>{

        return (
            <>
        <li><Link href={`/StudentList/${item}`}>{item}</Link></li>
        {/* 2nd method */}
        <pre> 
            
        </pre>
        <li><Link href={`/StudentList/${index}`}>{item}</Link></li>
        </>
        )
    })
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {/* <li> <Link href="/StudentList/1">Anil</Link></li>
        <li> <Link href="/StudentList/2">Peter</Link></li>
        <li> <Link href="/StudentList/3">Sam</Link></li>
        <li> <Link href="/StudentList/4">Burce</Link></li> */}
        {/* name */}
         {Store} 
        {/* <li> <Link href="/StudentList/Peter">Peter</Link></li>
        <li> <Link href="/StudentList/Sam">Sam</Link></li>
        <li> <Link href="/StudentList/Burce">Burce</Link></li> */}
      </ul>
    </div>
  );
}

export default page;
