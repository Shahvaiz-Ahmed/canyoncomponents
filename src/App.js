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

// import CheckPrice from './components/CheckPrice/CheckPrice';

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
  const accessToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0LyIsImlhdCI6MTY4ODcwNTk1MCwibmJmIjoxNjg4NzA1OTUwLCJleHAiOjE2ODg3MDk4NTAsImFpbyI6IkUyWmdZSkJJMTErZVYrRVYzYjZqSVlQN2FaQVVBQT09IiwiYXBwaWQiOiI2ODE0N2NmZS1kNDcyLTQ3ODgtYTlhYy03YWE4MDQyNDlhOTYiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC80ZTk0ZjA2Zi1kYjAxLTQ3ZWItYWZmMy03YTI4NGIwMWRkODQvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI3YTA2ZjFjYi0xOGMyLTRkY2ItOTQ3OS1kOTU4YTk4YzM0MWUiLCJyaCI6IjAuQVVZQWJfQ1VUZ0hiNjBldjgzb29Td0hkaEQzdmJabHNzMU5CaGdlbV9Ud0J1SjlHQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiN2EwNmYxY2ItMThjMi00ZGNiLTk0NzktZDk1OGE5OGMzNDFlIiwidGlkIjoiNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0IiwidXRpIjoiSnRqT0lYZGxkRXVIT1R3OHNLWk9BQSIsInZlciI6IjEuMCJ9.hK1ZgcXCJBFj55W99FiwjwtNfwN9cnatzcu2kNyndQmzXECStYZrWriEPCOO3cGm52x5KbDfZx5ztY3MsUVZxT4CawuOVxBjtiskWKYxxxS6efepGbcqWkzFsQh8sejx1huHCcI-2Q5oVElSOW81Fl90I5vZbs_R0_HTgb7miqVQ-8eEYeIj-9_0_JQl-cIGidxY0KoQB4Oi-TIsaoVQX1ZqEP3TtuYFow-rnkpoD9t36ndumdzFrCrc__l3uVG_utmCVggWNIwuduq4BzdmxyUVKhjEXLa-tfTEfZLrvUKNgD6z0vR1_L1IEqQ2RpTUAV8kZJ5t80foDJE-Ut37qA";
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