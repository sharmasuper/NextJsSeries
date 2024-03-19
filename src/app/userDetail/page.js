'use client'

import Script from "next/script";


function page() {
  return (
    <div>
        <Script src="./Location.js"
        onLoad={()=>{console.log("file Loaded")}}
        />
      <h1>Get user GeoLocation</h1>
   {/* Location.js hamai library ki trah use karnai kai liy banai taki hum usesai kahi per bhi use kar skai */}

    </div>
  );
}

export default page;
