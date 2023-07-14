import React, { useContext, useState, useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import "./css/shopleft.css";
// import axios from 'axios'
import { AiFillCaretDown } from "react-icons/ai";
import CheckboxList from "./CheckboxeList";
import SliderComponent from "./SliderComponent";
import CartPopup from "../CartPopup/CartPopup";
import Color from "./Color";
import Brand from './Brand'
import Compliance from './Compliance'
import SubMaterial from './SubMaterial'
import DurometerRange_Compliance from './DurometerRange_Compliance'
import { UserContext } from "../../UserContext";
import ExpandableContent from "./ExpandableContent";
import axios from 'axios'

const ShopLeft = () => {
  

  const [isCartopen, setisCartopen] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("");
  const countries = ["USA", "Canada", "Mexico", "Brazil", "Japan"];
  const [isopen, setisopen] = useState(false);
  const { setCs,setid,setsearch,setsize}=useContext(UserContext)
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };
  const {accessToken}=useContext(UserContext)
 
  const [arraydata, setArray] = useState([]);


useEffect(()=>{
  axios.get(
    'https://api.businesscentral.dynamics.com/v2.0/4e94f06f-db01-47eb-aff3-7a284b01dd84/Sandbox/ODataV4/Company(%27My%20Company%27)/itemattributee',
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        $filter: "Name eq 'Material'",
      },
    }
    ).then((res)=>{
       const array = res.data.value[0].Values.split(",");
        setArray(array);
    }
    )
},[arraydata,accessToken])

  return (
    <Scrollbars style={{ width: "20vw", height: "100%", overflowX: "hidden" }}>
      <div
        className="main "
        style={{
          width: "30vw",
        }}
      >
        <div className="flex">
          <h2>KEYWORD</h2>
          <div className="hr"></div>
        </div>
        <div className="keywordSearch">
          <div>
            <input
              type="text"
              placeholder="Search Here"
              className="searchinput"
              style={{backgroundColor: '#fff'}}
              onChange={(e) => setsearch(e.target.value)}
            />
          </div>

          <button
            className="search"
            
          >
            Search
          </button>
        </div>
        {isCartopen && <CartPopup />}
        <div className="flex">
          <h2>DIMENSIONS(mm)</h2>
          <div className="hr"><ExpandableContent/></div>
        </div>
        <div className="flex">
          <h2>STANDARD SIZE</h2>
          <div className="hr"></div>
        </div>
        <p>Standard Size:</p>

        <div className="p1">
          <select
            value={selectedCountry}
            className="country"
            style={{backgroundColor:'#fff'}}
            onChange={handleCountryChange}
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className="row">
          <AiFillCaretDown
            onClick={() => {
              setisopen(!isopen);
            }}
          />

          <input
          style={{backgroundColor:'#fff'}}
            type="text"
            className="sizeinput"
            placeholder="Size"
            min={0}
            onChange={(e) => {
              setsize(e.target.value);
            }}
          />
          <div className="updown"></div>

          <input
          style={{backgroundColor:'#fff'}}
            type="number"
            className="sizeinput"
            placeholder="CS"
            min={0}
            onChange={(e) => {
              setCs(e.target.value);
            }}
          />
          <div className="updown"></div>
          <input
          style={{backgroundColor:'#fff'}}
            type="number"
            className="sizeinput"
            placeholder="ID"
            min={0}
            onChange={(e) => {
              setid(e.target.value);
            }}
          />
          <div className="updown"></div>
        </div>
        {/* <SliderComponent /> */}
        <div className="flex">
          <h2>TEMPRATURE &deg; C</h2>
          <div className="hr"></div>
        </div>
        <SliderComponent />
        <div className="flex">
          <h2>BASE MATERIAL TYPE</h2>
          <div className="hr"></div>
        </div>
        <CheckboxList />
        {/* <div className="flex">
          <h2>Sub MATERIAL TYPE</h2>
          <div className="hr"></div>
        </div>
        <SubMaterial/> */}
        {/* <div className="flex">
          <h2>Compliance</h2>
          <div className="hr"></div>
        </div>
         <Compliance/>   */}
        <div className="flex">
          <h2>Hardness</h2>
          <div className="hr"></div>
        </div>
        <DurometerRange_Compliance/> 
        <div className="flex">
          <h2>Color</h2>
          <div className="hr"></div>
        </div>
         <Color/> 
        <div className="flex">
          <h2>Brand</h2>
          <div className="hr"></div>
        </div>
        <Brand/>
      </div>
    </Scrollbars>
  );
};

export default ShopLeft;
