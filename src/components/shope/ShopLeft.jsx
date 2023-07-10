import React, { useContext, useState, useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import "./css/shopleft.css";
// import axios from 'axios'
import { AiFillCaretDown } from "react-icons/ai";
import CheckboxList from "./CheckboxeList";
import dimensions from "../../Static/Dimensions.jpg";
import SliderComponent from "./SliderComponent";
import CartPopup from "../CartPopup/CartPopup";
import { UserContext } from "../../UserContext";
// import SubMaterial from './SubMaterial';
// import DurometerRange_Compliance from './DurometerRange_Compliance';
// import Brand from './Brand';
// import Compliance from './Compliance';
const ShopLeft = () => {
  // const { material, setmaterial} = useContext(UserContext)
  const { datax, updateData } = useContext(UserContext);

  const [isCartopen, setisCartopen] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("");
  const countries = ["USA", "Canada", "Mexico", "Brazil", "Japan"];
  const [isopen, setisopen] = useState(false);
  const [size, setsize] = useState(0);
  const [cs, setCs] = useState(0);
  const [id, setid] = useState(0);
  const [search, setsearch] = useState("");
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };
  const data = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];
  useEffect(() => {
    search === "" && updateData({ ...datax, search: search });
  }, [search]);
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
              placeholder="Search by color, scale, type"
              className="searchinput"
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
          <h2>DIMENSIONS(mm)</h2>
          <div className="hr"></div>
        </div>
        <img src={dimensions} alt="StandardImage" width={250} />
        <div className="flex">
          <h2>STANDARD SIZE</h2>
          <div className="hr"></div>
        </div>
        <p>Standard Size:</p>

        <div className="p1">
          <select
            value={selectedCountry}
            className="country"
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
            type="number"
            className="sizeinput"
            placeholder="Size"
            min={0}
            onChange={(e) => {
              setsize(e.target.value);
            }}
          />
          <div className="updown"></div>

          <input
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
        <div className="flex">
          <h2>Sub MATERIAL TYPE</h2>
          <div className="hr"></div>
        </div>
        {/* <SubMaterial/> */}
        <div className="flex">
          <h2>Compliance</h2>
          <div className="hr"></div>
        </div>
        {/* <Compliance/>  */}
        <div className="flex">
          <h2>Hardness</h2>
          <div className="hr"></div>
        </div>
        {/* <CheckboxList data={data} /> */}
        {/* <DurometerRange_Compliance/> */}
        <div className="flex">
          <h2>Color</h2>
          <div className="hr"></div>
        </div>
        {/* <Color/> */}
        <div className="flex">
          <h2>Brand</h2>
          <div className="hr"></div>
        </div>
        {/* <Brand/> */}
      </div>
    </Scrollbars>
  );
};

export default ShopLeft;
