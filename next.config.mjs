/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects : async()=>{
      return [
         {
            source:'/Redirection',
            destination :"/",
            permanent : false
         },
         //or bhi asai add kar sktai h
       {
         source:'/About',
         destination:'/user',
         permanent:false
       },
       {
         source:'/user/:userId',    //islkko batana padaiga ki dynmic h static nahi h isliy :userId likh userId ki jagah
         destination:'/',
         permanent:false
       },
       //agar hum vo url dai jo ismai access nahi kartha h to yai uskao bhi redirect kar dega
       {
         source:'/collage',
         destination:"/",
         permanent:'false'
       }

      ]
    }
   
};

export default nextConfig;
