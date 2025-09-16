import  { useState } from 'react';
import axios from "axios";

const AddProduct = () => {
 const [name, setName] = useState("")
 const [description, setDescription] = useState("")

     const handleSubmit = (e) => {
  e.preventDefault();
  axios
   .post(`http://localhost:5107/products`, { name, description })
   .then((res) => {
    setName('');
    setDescription('');
   });
 };

 return (
                <form onSubmit={handleSubmit}>
    <div >
     <div >
      <input
       value={name} onChange={(e) => setName(e.target.value)} required
       type="text" placeholder="Name" />
     </div>
     <div >
      <input
       value={description} onChange={(e) => setDescription(e.target.value)} required
       type="text" placeholder="Description" />
     </div>
     <div>
      <button>
       Add
      </button>
     </div>
    </div>
   </form>
         );
}

export default AddProduct;
