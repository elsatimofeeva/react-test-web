import React from 'react';
import { Routes, Route } from "react-router-dom";
import AddProduct from './components/AddProduct';

const App = () => {
  return (
   <>
      <Routes>
        <Route path='/create' element={<AddProduct />} />
      </Routes>
  </>
  );
}

export default App;
