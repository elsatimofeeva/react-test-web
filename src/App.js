import React from 'react';
import { Routes, Route } from "react-router-dom";
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';

const App = () => {
  return (
   <>
      <Routes>
      <Route path='/edit/:id' element={<EditProduct />} />
        <Route path='/create' element={<AddProduct />} />
      </Routes>
  
  </>
  );
}

export default App;
