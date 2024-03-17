import Link from "next/link";


function page() {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {/* <li> <Link href="/StudentList/1">Anil</Link></li>
        <li> <Link href="/StudentList/2">Peter</Link></li>
        <li> <Link href="/StudentList/3">Sam</Link></li>
        <li> <Link href="/StudentList/4">Burce</Link></li> */}
        {/* name */}
         <li> <Link href="/StudentList/anil">Anil</Link></li>
        <li> <Link href="/StudentList/Peter">Peter</Link></li>
        <li> <Link href="/StudentList/Sam">Sam</Link></li>
        <li> <Link href="/StudentList/Burce">Burce</Link></li>
      </ul>
    </div>
  );
}

export default page;
