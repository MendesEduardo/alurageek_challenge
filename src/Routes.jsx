import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header'
import Home from "./page/Home";
import Login from "./page/Login";
import Products from "./page/Products";
import Footer from "./components/Footer";
import './style/index.scss'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Products" element={<Products />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
//           <Route path="*" element={<NotFound />}></Route>
export default App
