
import React from 'react';

// import  { useState } from 'react';
import './App.css';
import { UserContext } from '../src/UserContext'
import { Routes, Route} from 'react-router-dom';
import Index from './Components/Index.jsx';
import RequestQuote from './Components/REquestQutoe/RequestQuote';
import ProductComponent from './Components/ProductOverview/ProductComponent';

import { useState } from 'react'
import CartPopup from './Components/CartPopup/CartPopup';
import { useEffect } from 'react';
// import CheckPrice from './components/CheckPrice/CheckPrice';

function App() {

  const [sideMenuBar, setsideMenuBar] = useState(false)
  const [sideMenuBarDropDown, setsideMenuBarDropDown] = useState(false)
  const [sideMenuBarDropDownIndex, setsideMenuBarDropDownIndex] = useState(false);
  const [isdraweropen , setisdraweropen]=useState(false);
  const [isCartopen, setisCartopen] = useState(false)
 

  return (
    <UserContext.Provider value={{sideMenuBar,isdraweropen,setisdraweropen,isCartopen,setisCartopen, setsideMenuBar, sideMenuBarDropDown, setsideMenuBarDropDown, sideMenuBarDropDownIndex, setsideMenuBarDropDownIndex}} >
     <Routes>
      <Route path='/' element={<Index/>}/>
      {/* <Route path='/' element={<CheckPrice/>}/> */}
      <Route path='/request-quote' element={<RequestQuote/>}/>
      <Route path='/add-to-cart' element={<CartPopup/>}/>
      <Route path='/product' element={<ProductComponent/>}/>
     </Routes>
    </UserContext.Provider>
  )
}

export default App

