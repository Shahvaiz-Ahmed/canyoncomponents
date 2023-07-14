import React, { useEffect, useState } from "react";
// import  { useState } from 'react';
import "./App.css";
import { MyContextProvider, UserContext } from "../src/UserContext";
import { Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import RequestQuote from "./components/REquestQutoe/RequestQuote";
import SignIn from "./components/Signin/signin";
import Signup from "./components/Signup/Signup";
import Checkout from "./components/CheckoutComponent/Checkout";
import CartPopup from "./components/CartPage/CartPopup";
import axios from "axios";

// import CheckPrice from './Components/CheckPrice/CheckPrice';

function App() {
  const [sideMenuBar, setsideMenuBar] = useState(false);
  const [sideMenuBarDropDown, setsideMenuBarDropDown] = useState(false);
  const [sideMenuBarDropDownIndex, setsideMenuBarDropDownIndex] =
    useState(false);
  // API DATA BELOW
  const [material, setmaterial] = useState(null);
  const [SubMaterial, setSubMaterial] = useState(null);
  const [Color, setColor] = useState(null);
  const [DurometerRange_Compliance, setDurometerRange_Compliance] =
    useState(null);
  const [Brand, setBrand] = useState(null);

  // const [Compliance, setCompliance] = useState(null)

  const [isCartopen, setisCartopen] = useState(false);

  // ITEM DETAILS API
  const [accessToken, setaccessToken] = useState()
    useEffect(() => {

      axios.get('http://localhost:3001/api/data')
  
       
  
        .then(res => {
  
          let a=JSON.parse(res.data)
  
          setaccessToken(a.access_token);
          console.log(a.access_token);
  
        })
  
        .catch(error => {
  
          console.error(error);
  
        });
  
    }, [accessToken]);
  
    // const [material, setmaterial] = useState()
  const [ItemDetails, setItemDetails] = useState();
  useEffect(() => {
    return () => {
      axios
        .get(
          "https://api.businesscentral.dynamics.com/v2.0/4e94f06f-db01-47eb-aff3-7a284b01dd84/Sandbox/ODataV4/Company(%27My%20Company%27)/itemattributee",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((res) => {
          setItemDetails(res.data.value[0].Values.split(","));
          console.log(ItemDetails);
        });
    };
  }, [ItemDetails]);

  return (
    <UserContext.Provider
      value={{
        sideMenuBar,
        isCartopen,
        ItemDetails,
        setItemDetails,
        Brand,
        setBrand,
        SubMaterial,
        Color,
        DurometerRange_Compliance,
        setDurometerRange_Compliance,
        setColor,
        setSubMaterial,
        material,
        setmaterial,
        setisCartopen,
        setsideMenuBar,
        sideMenuBarDropDown,
        setsideMenuBarDropDown,
        sideMenuBarDropDownIndex,
        setsideMenuBarDropDownIndex,
        accessToken
      }}
    >
      <MyContextProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* <Route path='/' element={<CheckPrice/>}/> */}
          <Route path="Signin" element={<SignIn />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="/request-quote" element={<RequestQuote />} />
          <Route path="/CartPopup" element={<CartPopup />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </MyContextProvider>
    </UserContext.Provider>
  );
}

export default App;