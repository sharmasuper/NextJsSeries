
"use client"

function page({params}) {
    console.log(params)
    const {student} = params
  return (
    <div>
      <h1>Student List</h1>
      <h1>Student Detail</h1>
      <h1>Link parms is {student}</h1>
    </div>
  );
}

export default page;
