import getUser from "../../../../Service/getUser";

 async function page({params}) {   //props.params.userId
    console.log(params)
    const getUserList = await getUser()
    const currentId = params.userId
     const {firstName} = getUserList[currentId-1]

     //but agar is sarai pages ko mai staoticly call karva du to mujai bar bar api call karnai ki jarurth nahi hogi
     //jisai hamara data bhi bachaiga or build time kai uper hi yai sarai pages generate ho jaigai

  return (
    <div>
      <h3>User Detail page</h3>
      <p>{firstName}</p>
    </div>
  );
}

export default page;


export async function generateStaticParams(){   //function yahi rakhna h nahi to yai kam nahi karaiga
    const getUserList = await getUser()   
   return getUserList.map((items)=>({   //map dynmic pages ko generate kartha h  ek loop ki jasia
     userId : items.id.toString()      //yai string mai id laitha h   iskai agar id string mai nhi ho to yai toString issai string mai convert kar detha h
     //userId ka kan [userId] kai nam per rakha h 
   })   
 )
}


