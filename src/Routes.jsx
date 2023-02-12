import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from './components/Header'
import Home from "./page/Home"
import Login from "./page/Login"
import Products from "./page/Products"
import AddProduto from "./page/AddProduto"
import SeeProduct from "./page/SeeProduct"
import NotFound from "./page/NotFound"
import Footer from "./components/Footer"
import './style/index.scss'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Produtos" element={<Products />}></Route>
          <Route path="/AdicionarProduto" element={<AddProduto />}></Route>
          <Route path="/Produtos/:id" element={<SeeProduct />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
