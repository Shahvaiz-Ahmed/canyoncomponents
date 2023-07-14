import React, { useEffect, useState } from "react";
// import  { useState } from 'react';
import "./App.css";
import {  UserContext } from "../src/UserContext";
import { Routes, Route } from "react-router-dom";
import Index from "./Components/Index";
import RequestQuote from "./Components/REquestQutoe/RequestQuote";
import SignIn from "./Components/Signin/signin";
import Signup from "./Components/Signup/Signup";
import Checkout from "./Components/CheckoutComponent/Checkout";
import ProductComponent from "./Components/ProductOverview/ProductComponent.jsx"
import CartPopup from "./Components/CartPage/CartPopup";
import axios from "axios";
// import CheckPrice from './Components/CheckPrice/CheckPrice';

function App() {
  const [sideMenuBar, setsideMenuBar] = useState(false);
  const [sideMenuBarDropDown, setsideMenuBarDropDown] = useState(false);
  const [sideMenuBarDropDownIndex, setsideMenuBarDropDownIndex] =
    useState(false);
  const [size, setsize] = useState(0);
  const [cs, setCs] = useState(0);
  const [id, setid] = useState(0);
  const [search, setsearch] = useState("");
 const [selectedhardness, setselectedhardness] = useState([])
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
  
        })
  
        .catch(error => {
  
          console.error(error);
  
        });
  
    }, []);
  
    // const [material, setmaterial] = useState()
  const [item, setitem] = useState();
  useEffect(() => {
    return () => {
      axios
        .get(
          "https://api.businesscentral.dynamics.com/v2.0/4e94f06f-db01-47eb-aff3-7a284b01dd84/Sandbox/ODataV4/Company(%27My%20Company%27)/ItemApi",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((res) => {
          const items=res.data.value;
        

        let previousItemNo = null;

        let productArray = [];

        let currentProduct = null;

        items?.forEach((item) => {
          const isSameProduct = item.ItemNo === previousItemNo;

          previousItemNo = item.ItemNo;

          if (!isSameProduct) {
            if (currentProduct !== null) {
              productArray.push(currentProduct);
            }

            currentProduct = {
              ItemNo: item.ItemNo,

              qnty: item.Quantity,

              price: item.UnitCost,

              Description2: item.Description2,

              SearchDescription: item.SearchDescription,
            };
          }

          // Add the Compound Number as a key-value pair to the current product object

          const compoundNumberKey =
            item.AttributeName.replace(/\s/g, "").replace(/[^\w\s]/gi, "") ||
            "CompoundNumber";

          currentProduct[compoundNumberKey] = item.AttributeValue;
        });

        if (currentProduct !== null) {
          productArray.push(currentProduct);
        }

        setitem(productArray);
        console.log(productArray);
              });
    };
  }, [item,accessToken]);
  const [selectedcolor, setselectedcolor] = useState([])
  const [selectedmaterial, setselectedmaterial] = useState([])
  const [selectedbrand, setselectedbrand] = useState([])
  return (
    <UserContext.Provider
      value={{
        selectedhardness,
        setselectedhardness,
        selectedcolor,
        setselectedcolor,
        selectedmaterial,
        setselectedmaterial,
        setselectedcolor,
        selectedbrand,
        setselectedbrand,
        setsize,
        size,
        cs,setCs,
        id,setid,search,
        sideMenuBar,
        isCartopen,
        item,
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
       
        <Routes>
          <Route path="/" element={<Index />} />
          {/* <Route path='/' element={<CheckPrice/>}/> */}
          <Route path="Signin" element={<SignIn />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="/request-quote" element={<RequestQuote />} />
          <Route path="/CartPopup" element={<CartPopup />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/product/:productid" element={<ProductComponent />} />
        </Routes>
   
    </UserContext.Provider>
  );
}

export default App;