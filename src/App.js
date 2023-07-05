
import React from 'react';
// import  { useState } from 'react';
import './App.css';
import { UserContext } from '../src/UserContext'
import {Routes, Route} from 'react-router-dom';
import Index from './components/Index';
import RequestQuote from './components/REquestQutoe/RequestQuote';
import { useState } from 'react'
import SignIn from './components/Signin/signin';
import Signup from './components/Signup/Signup';
import Checkout from './components/CheckoutComponent/Checkout';
import CartPopup from './components/CartPage/CartPopup';

// import CheckPrice from './components/CheckPrice/CheckPrice';

function App() {

  const [sideMenuBar, setsideMenuBar] = useState(false)
  const [sideMenuBarDropDown, setsideMenuBarDropDown] = useState(false)
  const [sideMenuBarDropDownIndex, setsideMenuBarDropDownIndex] = useState(false)

  const [isCartopen, setisCartopen] = useState(false)
  return (

    <UserContext.Provider value={{sideMenuBar,isCartopen,setisCartopen, setsideMenuBar, sideMenuBarDropDown, setsideMenuBarDropDown, sideMenuBarDropDownIndex, setsideMenuBarDropDownIndex}} >
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

