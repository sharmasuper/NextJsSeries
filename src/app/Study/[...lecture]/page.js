'use client'

function page({params}) {
    console.log("params lecture",params)
  return (
    <div>
      {/* <h1>Lecture  of collage - number - {params.lecture[0]} </h1>
      <h2>lecture of collage -number - {params.lecture[1]}</h2> */}
      {/* 2nd method */}
      <h1>2nd method</h1>
     {params.lecture.map((e,index)=>{
        return <h3 key={index}>{e}</h3>
     })}
    </div>
  );
}

export default page;
