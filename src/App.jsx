import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Product from './Product'


function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="product">Product</Link>
        </li>
      </ul>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/home"  element={<Home />}/>
        <Route path="/product"  element={<Product />}/>
      </Routes>
    </div>
  )
}

export default App
