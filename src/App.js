
import React, { useState } from 'react'
// import  { useState } from 'react';
import './App.css';
import { UserContext } from '../src/UserContext'
import {Routes, Route} from 'react-router-dom';
import Index from './components/Index';
import RequestQuote from './components/REquestQutoe/RequestQuote';
import SignIn from './components/Signin/signin';
import Signup from './components/Signup/Signup';
import Checkout from './components/CheckoutComponent/Checkout';
import CartPopup from './components/CartPage/CartPopup';

// import CheckPrice from './components/CheckPrice/CheckPrice';

function App() {

  const [sideMenuBar, setsideMenuBar] = useState(false)
  const [sideMenuBarDropDown, setsideMenuBarDropDown] = useState(false)
  const [sideMenuBarDropDownIndex, setsideMenuBarDropDownIndex] = useState(false)
  // API DATA BELOW
  const [material, setmaterial] = useState(null);
  const [SubMaterial, setSubMaterial] = useState(null);
  const [Color, setColor] = useState(null)
  const [DurometerRange_Compliance, setDurometerRange_Compliance] = useState(null)
  const [Brand, setBrand] = useState(null)
  // const [Compliance, setCompliance] = useState(null)
  



  const [isCartopen, setisCartopen] = useState(false)
  return (

    <UserContext.Provider value={{sideMenuBar,isCartopen,Brand, setBrand,SubMaterial,Color,DurometerRange_Compliance, setDurometerRange_Compliance, setColor, setSubMaterial,  material, setmaterial, setisCartopen, setsideMenuBar, sideMenuBarDropDown, setsideMenuBarDropDown, sideMenuBarDropDownIndex, setsideMenuBarDropDownIndex}} >
     <Routes>
      
      <Route path='/' element={<Index/>}/>
      {/* <Route path='/' element={<CheckPrice/>}/> */}
      <Route path='Signin' element= {<SignIn/>}/>
      <Route path='Signup' element={<Signup/>}/>
      <Route path='/request-quote' element={<RequestQuote/>}/>
      <Route path='/CartPopup' element={<CartPopup/>}/>
      <Route path='/Checkout' element= {< Checkout/>}/>
     </Routes> 
   
    </UserContext.Provider>

  )
}

export default App

