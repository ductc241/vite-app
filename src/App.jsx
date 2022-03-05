import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Product from './Product'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/home"  element={<Home />}/>
          <Route path="/product"  element={<Product />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
