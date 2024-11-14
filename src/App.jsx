import { ProductCard } from "./components/ProductCard"

const products = [
{id:0,
  name: "Product1",
  category: "Category 1",
  price:200,
  img: "https://www.tecnosell.com/media/catalog/product/cache/60c31028333b516fd0f8945d994bb7aa/b/l/blu1_2_7_1.jpg"
},
{id:1,
  name: "Product2",
  category: "Category 1",
  price:570,
  img: "https://www.techspecs.info/_next/image/?url=https%3A%2F%2Fwww.techspecs.info%2Fuploads%2FApple_i_Phone_9_Plus_Specification_8020930c15.jpg&w=256&q=75"}
];

function App() {
  return( <div>
    {products.map((product) =>(
      <ProductCard data={product}/>
    ))}
  </div>);
}

export default App;