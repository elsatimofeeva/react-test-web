import axios from "axios";
import { useEffect, useState } from "react";
import ProductList from "./ProductList.js";
import { useNavigate, useParams } from "react-router";
const Home = () => {
    const navigate = useNavigate()
  
    const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
    useEffect(() => {
    setLoading(true)
    axios.get("http://localhost:5107/products")
      .then(response => {
        setProducts(response.data)
      })
    setLoading(false)
  }, [])
    const deleteProduct = (id) => {
    axios.delete(`http://localhost:5107/products/${id}`).then((response) => {
      const newProduct = products.filter((product) => product.id !== id);
      console.log(response)
      setProducts(newProduct);
    }).catch(error => {
      console.log(error)
    });
  }
    const goAddProduct = () => {
    navigate('/create')
  }
      return (
<div>
      <ProductList
        products={products}
        loading={loading}
        deleteProduct={deleteProduct}
      />
            <button
              onClick={goAddProduct}>
              Add
            </button>
    </div>
          );
}

export default Home;

