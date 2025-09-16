import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <>
      <Routes>
        <Route path='/create' element={<AddProduct />} />
      </Routes>
  </>
  );
}

export default App;
