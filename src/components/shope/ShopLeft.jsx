import React, { useState } from 'react';
import "./css/shopleft.css";
import { AiFillCaretDown } from 'react-icons/ai';
import CheckboxList from './CheckboxeList';
import dimensions from "../../Static/Dimensions.jpg";
import SliderComponent from '../shope/SliderComponent';
import Color from './Color'
// import ParentComponent from './ParentComponent';
// import axios from 'axios';
// import { UserContext } from '../../UserContext';
import SubMaterial from './SubMaterial';
import DurometerRange_Compliance from './DurometerRange_Compliance';
import Brand from './Brand';
import Compliance from './Compliance';
const ShopLeft = () => {
  // const { material, setmaterial} = useContext(UserContext)
  const [selectedCountry, setSelectedCountry] = useState("");
  const countries = ["USA", "Canada", "Mexico", "Brazil", "Japan"];
  const [isopen, setisopen] = useState(false);
  const [ setsize] = useState(0);
  const [ setCs] = useState(0);
  const [ setid] = useState(0);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const data = [
    // { id: 1, name: 'Item 1' },
    // { id: 2, name: 'Item 2' },
    // { id: 3, name: 'Item 3' },
    // <div>
    //     {/* Display the material data */}
    //     {material.map((item) => (
    //       <div key={item.id}>{item.name}</div>
    //     ))}
    //   </div>
  ];



// Material DATA API STARTS



  // //  const [material, setmaterial] = useState()

  // useEffect(() => {
     
  //   return () => {
  //     axios.get(
  //       'https://api.businesscentral.dynamics.com/v2.0/4e94f06f-db01-47eb-aff3-7a284b01dd84/Sandbox/ODataV4/Company(%27My%20Company%27)/itemattributee',
  //       {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //         params: {
  //           $filter: "Name eq 'Material'",
  //         },
  //       }
  //       ).then((res)=>{
  //         setmaterial(res.data.value)

         
  //       }
  //       )
  //   }
  // }, [])


  // MATERIAL DATA API CLOSED
  

  return (
    <div className="main">
      <div className='flex'>
        <h2>KEYWORD</h2>
        <div className='hr'></div>
      </div>
      <div className='keywoedSearch'>
        <div>
          <input type="text" placeholder='Search' className='searchinput' />
        </div>
        <button className='search' >Search</button>
      </div>
      <div className="flex">
        <h2>DIMENSIONS(mm)</h2>
        <div className='hr'></div>
      </div>
      <img src={dimensions} alt="StandardImage" width={250} />
      <div className="flex">
        <h2>STANDARD SIZE</h2>
        <div className='hr'></div>
      </div>
      <p>Standard Size:</p>
      <div className='p1'>
        <select value={selectedCountry} className='country' onChange={handleCountryChange}>
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <div className="row">
        <AiFillCaretDown onClick={() => { setisopen(!isopen) }} />
        <input type="number" className='sizeinput' placeholder='Size' min={0} onChange={(e) => { setsize(e.target.value); }} />
        <div className='updown'></div>
        <input type="number" className='sizeinput' placeholder='CS' min={0} onChange={(e) => { setCs(e.target.value) }} />
        <div className='updown'></div>
        <input type="number" className='sizeinput' placeholder='ID' min={0} onChange={(e) => { setid(e.target.value) }} />
        <div className='updown'></div>
      </div>
      {isopen ? (
        <div>
          <div style={{ width: '15vw', height: '20vh', marginTop: '2rem', border: "2px solid grey", overflowY: 'scroll' }}>
            <input type="checkbox" name="" id="" />10 20 30 <br />
            <input type="checkbox" name="" id="" />10 20 30 <br />
            <input type="checkbox" name="" id="" />10 20 30 <br />
            <input type="checkbox" name="" id="" />10 20 30 <br />
            <input type="checkbox" name="" id="" />10 20 30 <br />
            <input type="checkbox" name="" id="" />10 20 30 <br />
            <input type="checkbox" name="" id="" />10 20 30 <br />
            <input type="checkbox" name="" id="" />10 20 30 <br />
          </div>
        </div>
      ) : null}
      <div className="flex">
        <h2>TEMPRATURE &deg; C</h2>
        <div className='hr'></div>
      </div>
      <SliderComponent/> 
      <div className="flex">
        <h2>BASE MATERIAL TYPE</h2>
        <div className='hr'></div>
      </div>
       {/* <CheckboxList />  */}
      <div className="flex">
        <h2>Sub MATERIAL TYPE</h2>
        <div className='hr'></div>
      </div>
      {/* <SubMaterial/> */}
      <div className="flex">
        <h2>Compliance</h2>
        <div className='hr'></div>
      </div>
       <Compliance/> 
      <div className="flex">
        <h2>Hardness</h2>
        <div className='hr'></div>
      </div>
      {/* <CheckboxList data={data} /> */}
      {/* <DurometerRange_Compliance/> */}
      <div className="flex">
        <h2>Color</h2>
        <div className='hr'></div>
      </div>
      {/* <Color/> */}
      <div className="flex">
        <h2>Brand</h2>
        <div className='hr'></div>
      </div>
      {/* <Brand/> */}
    </div>
    
  )
}

export default ShopLeft;
