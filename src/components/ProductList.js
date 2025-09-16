import { Link } from "react-router-dom";

const ProductList = ({ products, loading, deleteProduct}) => {
  
  return (
<div>
      {loading && <p>loading ...</p>}
      {products &&
        <ul>
          {(products.map((product) =>
            <li key={product.id}>
              <div >
                <p >{product.name}</p>
                <p >{product.description}</p>
              </div>
              <div>
                <Link to={`/edit/${product.id}`}>
                  <button>EDIT</button>
                </Link>
                <button onClick={() => deleteProduct(product.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul >
      }
    </div >
      )
}

export default ProductList;
