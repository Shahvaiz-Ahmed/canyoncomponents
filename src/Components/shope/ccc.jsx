import React, { useContext, useState, useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import "./css/shopleft.css";
// import axios from 'axios'
// import { AiFillCaretDown } from "react-icons/ai";
import CheckboxList from "./CheckboxeList";
import SliderComponent from "./SliderComponent";
import CartPopup from "../CartPopup/CartPopup";
import Color from "./Color";
import Brand from "./Brand";
import Compliance from "./Compliance";
import SubMaterial from "./SubMaterial";
import DurometerRange_Compliance from "./DurometerRange_Compliance";
import { UserContext } from "../../UserContext";
import DimensionsExpand from "./ExpandableComponents/DimensionsExpand";
import StandardExpand from "./ExpandableComponents/StandardExpand";
import TempExpand from "./ExpandableComponents/TempExpand";
import BaseExpand from "./ExpandableComponents/BaseExpand";
import SubExpand from "./ExpandableComponents/SubExpand";
import HardnessExpand from "./ExpandableComponents/HardnessExpand";
import ComplianceExpand from "./ExpandableComponents/ComplianceExpand";
import ColorExpand from "./ExpandableComponents/ColorExpand";
import BrandExpand from "./ExpandableComponents/BrandExpand";
// import dimensions from "../../Static/Dimensions.jpg";
const ShopLeft = () => {
  const { datax, updateData } = useContext(UserContext);

  const [isCartopen, setisCartopen] = useState(null);
  // const [selectedCountry, setSelectedCountry] = useState("");
  // const countries = ["USA", "Canada", "Mexico", "Brazil", "Japan"];
  // const [isopen, setisopen] = useState(false);
  // const [size, setsize] = useState(0);
  // const [cs, setCs] = useState(0);
  // const [id, setid] = useState(0);
  const [search, setsearch] = useState("");
  // const handleCountryChange = (event) => {
  //   setSelectedCountry(event.target.value);
  // };
  // const data = [
  //   { id: 1, name: "Item 1" },
  //   { id: 2, name: "Item 2" },
  //   { id: 3, name: "Item 3" },
  // ];
  useEffect(() => {
    search === "" && updateData({ ...datax, search: search });
  }, [search]);

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  
  return (
    <Scrollbars style={{ width: "20vw", height: "100%", overflowX: "hidden" }}>
      <div
        className="main "
        style={{
          width: "30vw",
        }}
      >
        <div className="flex">
        </div>
        <div className="keywordSearch">
          <div>
            <input
              type="text"
              placeholder="Search Here"
              className="searchinput"
              style={{ backgroundColor: "#fff", height: "2.5rem" }}
              onChange={(e) => setsearch(e.target.value)}
            />
          </div>

          <button
            className="search"
            onClick={() => updateData({ ...datax, search: search })}
          >
            Search
          </button>
        </div>
        {isCartopen && <CartPopup />}
        <div className="flex">
        <h2 style={{marginRight: '1.0rem'}}>DIMENSIONS(mm)</h2>
        <button isExpanded={isExpanded}
        onClick={toggleExpand}
      >
        {isExpanded ? "-" : "+"}
      </button>
        </div>
        {
          isExpanded? <DimensionsExpand />:<></>
        }

        
        {/* <img src={dimensions} alt="StandardImage" width={250} /> */}
        <div className="flex">
          <h2>STANDARD SIZE</h2>
          <div className="hr"></div>
        </div>
        <StandardExpand />
        {/* <p>Standard Size:</p>

        <div className="p1">
          <select
            value={selectedCountry}
            className="country"
            style={{ backgroundColor: "#fff", height: "2.5rem" }}
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
            style={{ backgroundColor: "#fff", marginLeft: "-2rem" }}
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
            style={{ backgroundColor: "#fff" }}
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
            style={{ backgroundColor: "#fff" }}
            type="number"
            className="sizeinput"
            placeholder="ID"
            min={0}
            onChange={(e) => {
              setid(e.target.value);
            }}
          />
          <div className="updown"></div>
        </div> */}
        {/* <SliderComponent /> */}
        <div className="flex">
          <h2>TEMPRATURE &deg; C</h2>
          <div className="hr"></div>
        </div>
        <TempExpand />
        {/* <SliderComponent /> */}
        <div className="flex">
          <h2>BASE MATERIAL TYPE</h2>
          <div className="hr"></div>
        </div>
        <BaseExpand />
        {/* <CheckboxList /> */}
        <div className="flex">
          <h2>SUB MATERIAL TYPE</h2>
          <div className="hr"></div>
        </div>
        <SubExpand />
        {/* <SubMaterial /> */}
        <div className="flex">
          <h2>COMPLIANCE</h2>
          <div className="hr"></div>
        </div>
        <ComplianceExpand />
        {/* <Compliance /> */}
        <div className="flex">
          <h3>HARDNESS</h3>
          <div className="hr"></div>
        </div>
        <HardnessExpand />

        {/* <DurometerRange_Compliance /> */}
        <div className="flex">
          <h3>COLOR</h3>
          <div className="hr"></div>
        </div>
        <ColorExpand />
        {/* <Color /> */}
        <div className="flex">
          <h3>BRAND</h3>
          <div className="hr"></div>
        </div>
        <BrandExpand />
        {/* <Brand /> */}
      </div>
    </Scrollbars>
  );
};

export default ShopLeft;
