import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './Pages/Shop'
import Shopcategory from './Pages/Shopcategory'
import Product from './Pages/Product'
import Loginpage from './Pages/Loginpage'
import Cart from './Pages/Cart'
import Footer from './components/Footer/Footer'
import menbanner from './components/Assets/banner_mens.png'
import womenbanner from './components/Assets/banner_women.png'
import kidbanner from './components/Assets/banner_kids.png'
import Breadcrumbs from './components/Breadcumbs/Breadcrumbs'
const App = () => {
  return ( 
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<Shopcategory banner={menbanner} category='men'/>}/>
        <Route path='/womens' element={<Shopcategory banner={womenbanner} category='women'/>}/>
        <Route path='/kids' element={<Shopcategory banner={kidbanner}  category='kid'/>}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/loginpage' element={<Loginpage/>}/>
        <Route path='/Product' element={<Product />}/>
        <Route path=':ProductId' element={<Breadcrumbs />}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App