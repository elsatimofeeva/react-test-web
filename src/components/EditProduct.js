import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const EditProduct = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([])
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const { id } = useParams();
  useEffect(() => {
    axios.get("http://localhost:5107/products/" + id)
      .then(response => {
        const data = response.data;
        setName(data.name);
        setDescription(data.description);
      })
      .catch(error => console.log(error))
  }, [id])

 const handleSubmit = (e) => {
    e.preventDefault()
    axios.put("http://localhost:5107/products/" + id, {
      name,
      description
    })
      .then(response => {
        setData(response.data);
        navigate('/')
      })
  } 
const goHome = () => {
    navigate('/')
  }
      return (
<div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text" placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text" placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div >
            <button>
              EDIT
            </button>
            <button
              onClick={goHome}>
              CANCEL
            </button>
          </div>
        </div>
      </form>
    </div>

          );
}

export default EditProduct;

