import React from 'react';
import Sleft from "./ShopLeft"
import Sright from "./ShopRight";
import Drawer  from './Drawer';
import { useContext } from 'react';
import axios from 'axios'
import './Shop.css'

import { UserContext } from '../../UserContext';
import  { useEffect, useState } from 'react';
import zIndex from '@mui/material/styles/zIndex';

const Shope = () => {
  const {isdraweropen,setisdraweropen} = useContext(UserContext);
const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call it initially

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  
 
 
  

  return (
    <div className="row">
      <div>
        {isMobileView ? (
        
          <>
            {isdraweropen ? <Drawer/> : null}
          </>
        ) : (
        
          <Sleft  />
        )}
      </div>
      {isMobileView ? (
        
        <>
          {isdraweropen ? <div style={{"position":"absolute","zIndex":"1","top":"125px","left":"0"}}>
      <Sright   />

      </div> :<><div style={{"width":"100vh"}}><Sright/></div></>}
        </>
      ) : (
      
        <Sright />
      )} 
     
    </div>
  );
}






  
export default Shope