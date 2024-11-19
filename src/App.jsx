import { ProductCard } from "./components/ProductCard"
import { useEffect, useState } from "react";



const defaultValue = [
{id:0,
  title: "Product1",
  category: "Category 1",
  price:200,
  image: "https://www.tecnosell.com/media/catalog/product/cache/60c31028333b516fd0f8945d994bb7aa/b/l/blu1_2_7_1.jpg"
},
{id:1,
  title: "Product2",
  category: "Category 1",
  price:570,
  image: "https://www.techspecs.info/_next/image/?url=https%3A%2F%2Fwww.techspecs.info%2Fuploads%2FApple_i_Phone_9_Plus_Specification_8020930c15.jpg&w=256&q=75"}
];


function App() {
  const [products, setProducts] = useState(defaultValue)
  const [loading, setLoading] = useState(true)

useEffect( () => {
  fetch('https://fakestoreapi.com/products')
  .then((res)=>res.json())
  .then((json)=>setProducts(json))
  .finally(() => setLoading(false))
}, []);
  return( <div class="container"> 
      {loading && <div>Loading...</div>}
    {products.map((product) =>(
      <ProductCard data={product}/>
    ))}
  </div>);
}


export default App;