// async function ProductList() {
//      let data = await fetch("https://dummyjson.com/products")
//      data = await data.json();
//      return data.products
// }

//  async function page() {
//  let products = await ProductList()
//  console.log(products)
//   return (
//     <div>
//       <h1>ProductList</h1>
//       {products.map((item)=>{
//       return <h1>{item.title}</h1>
//       })}
//     </div>
//   )
// }

// export default page;
// 2nd method to use call api in server component in next js
import axios from "axios"
const ProductList = async() =>{
    let data = await axios.get("https://dummyjson.com/products")
    return data.data.products

}


 async function page() {
    let products = await ProductList()
    console.log(products)
  return (
    <div>
      {products.map((item,index)=>{
        return <h1 className={index}>{item.title}</h1>
      })}
    </div>
  );
}











export default page;


