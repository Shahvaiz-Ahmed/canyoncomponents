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
  

  const [isCartopen, setisCartopen] = useState(null);
<<<<<<< HEAD
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

  const [isDimExpanded, setisDimExpanded] = useState(false);
  const [isStdExpanded, setisStdExpanded] = useState(false);
  const [isTempExpanded, setisTempExpanded] = useState(false);
  const [isBmtExpanded, setisBmtExpanded] = useState(false);
  const [isSmtExpanded, setisSmtExpanded] = useState(false);
  const [isCompExpanded, setisCompExpanded] = useState(false);
  const [isHardExpanded, setisHardExpanded] = useState(false);
  const [isColExpanded, setisColExpanded] = useState(false);
  const [isBrandExpanded, setisBrandExpanded] = useState(false);

  
=======
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

>>>>>>> origin/newbranch
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
            
          >
            Search
          </button>
        </div>
        {isCartopen && <CartPopup />}
        <div className="flex" >
        <h2 >DIMENSIONS(mm)</h2>
        <button  style={{marginLeft: '2rem'}}
        onClick={()=>{
          setisDimExpanded(!isDimExpanded);
        }}
      >
        {isDimExpanded ? "-" : "+"}
      </button>
        </div>
        {
          isDimExpanded? <DimensionsExpand />:<></>
        }

        
        {/* <img src={dimensions} alt="StandardImage" width={250} /> */}
        <div className="flex">
          <h2 >STANDARD SIZE</h2>
          <button  style={{marginLeft: '3.8rem'}} isTempExpanded={isTempExpanded}
        onClick={()=>{
          setisStdExpanded(!isStdExpanded);
        }}
      >
        {isStdExpanded ? "-" : "+"}
      </button>
        </div>
        {
          isStdExpanded? <StandardExpand />:<></>
        }
        
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
          <h2 style={{marginRight: '2.0rem'}}>TEMPRATURE &deg; C</h2>
          <button  style={{marginLeft: '1.2rem'}} isTempExpanded={isTempExpanded}
        onClick={()=>{
          setisTempExpanded(!isTempExpanded);
        }}
      >
        {isTempExpanded ? "-" : "+"}
      </button>
        </div>
        {
          isTempExpanded? <TempExpand />:<></>
        }

        
        {/* <SliderComponent /> */}
        <div className="flex">
          <h2 >BASE MATERIAL TYPE</h2>
          <button   isTempExpanded={isTempExpanded}
        onClick={()=>{
          setisBmtExpanded(!isBmtExpanded);
        }}
      >
        {isBmtExpanded ? "-" : "+"}
      </button>
        </div>
<<<<<<< HEAD
        {
          isBmtExpanded?<BaseExpand />:<></>
        }
        
        {/* <CheckboxList /> */}
        <div className="flex">
          <h2 >SUB MATERIAL TYPE</h2>
          <button  style={{marginLeft: '1rem'}} isTempExpanded={isTempExpanded}
        onClick={()=>{
          setisSmtExpanded(!isSmtExpanded);
        }}
      >
        {isSmtExpanded ? "-" : "+"}
      </button>
        </div>
        {
          isSmtExpanded? <SubExpand />:<></>
        }
        
        {/* <SubMaterial /> */}
        <div className="flex">
          <h2 style={{marginRight: '2.0rem'}}>COMPLIANCE</h2>
          <button isTempExpanded={isTempExpanded}
        onClick={()=>{
          setisCompExpanded(!isCompExpanded);
        }}
      >
        {isCompExpanded ? "-" : "+"}
      </button>
        </div>
        {
          isCompExpanded?  <ComplianceExpand />:<></>
        }
       
        {/* <Compliance /> */}
=======
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
>>>>>>> origin/newbranch
        <div className="flex">
          <h3 style={{marginRight: '2.0rem'}}>HARDNESS</h3>
          <button isTempExpanded={isTempExpanded}
        onClick={()=>{
          setisHardExpanded(!isHardExpanded);
        }}
      >
        {isHardExpanded ? "-" : "+"}
      </button>
        </div>
        {
          isHardExpanded?         <HardnessExpand />
          :<></>
        }

        {/* <DurometerRange_Compliance /> */}
        <div className="flex">
          <h3 style={{marginRight: '2.0rem'}}>COLOR</h3>
          <button isTempExpanded={isTempExpanded}
        onClick={()=>{
          setisColExpanded(!isColExpanded);
        }}
      >
        {isColExpanded ? "-" : "+"}
      </button>
        </div>
        {
          isColExpanded?                 <ColorExpand />

          :<></>
        }
        {/* <Color /> */}
        <div className="flex">
          <h3 style={{marginRight: '2.0rem'}}>BRAND</h3>
          <button isTempExpanded={isTempExpanded}
        onClick={()=>{
          setisBrandExpanded(!isBrandExpanded);
        }}
      >
        {isBrandExpanded ? "-" : "+"}
      </button>
        </div>
        {
          isBrandExpanded?         <BrandExpand />
          :<></>
        }
        {/* <Brand /> */}
      </div>
    </Scrollbars>
  );
};

export default ShopLeft;
