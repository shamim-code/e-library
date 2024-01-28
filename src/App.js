import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import CreateAc from './pages/CreateAc'
import Login from './pages/Login'
import Navs from './pages/Navs'
import Faq from './pages/Faq'
import Special from './pages/Special'
import Poem from './pages/Poem'
import Novel from './pages/Novel'
import Science from './pages/Science'
import Dashboard from './pages/Dashboard'
import Order from './pages/Order'


export default function App() {
  return (
    <BrowserRouter>
    <Navs/>
      <Routes >
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/createaccount' element={<CreateAc />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/faq' element={<Faq />}/>
        <Route path='/special' element={<Special />}/>
        <Route path='/poem' element={<Poem />}/>
        <Route path='/poem/:title' element={<Order />}/>
        <Route path='/novel' element={<Novel />}/>
        <Route path='/novel/:title' element={<Order />}/>
        <Route path='/science' element={<Science />}/>
        <Route path='/science/:title' element={<Order />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/:title' element={<Order />}/>
        <Route path='*' element={<p>404 Page not found!!</p>}/>
      </Routes>
    </BrowserRouter>
  )
}
