import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import axios from 'axios'

import './css/shopright.css';
// import ProductTable from './ProductTable';
import CustomPaginationActionsTable from './ItemDetails';
import { useState,useEffect } from 'react';
import { UserContext } from '../../UserContext';


const ShopRight = () => {
  const {isdraweropen,setisdraweropen} = useContext(UserContext);
  const [search , setsearch]=useState(false);
 
  const handledrawer=()=>{
    setisdraweropen(()=>{
      return isdraweropen(true);
    });
  }
  const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0LyIsImlhdCI6MTY4ODY0MDAyOSwibmJmIjoxNjg4NjQwMDI5LCJleHAiOjE2ODg2NDM5MjksImFpbyI6IkUyWmdZRWh5Y1BRN3ZMcktjb25KSW9YWDdXSE5BQT09IiwiYXBwaWQiOiI2ODE0N2NmZS1kNDcyLTQ3ODgtYTlhYy03YWE4MDQyNDlhOTYiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC80ZTk0ZjA2Zi1kYjAxLTQ3ZWItYWZmMy03YTI4NGIwMWRkODQvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI3YTA2ZjFjYi0xOGMyLTRkY2ItOTQ3OS1kOTU4YTk4YzM0MWUiLCJyaCI6IjAuQVVZQWJfQ1VUZ0hiNjBldjgzb29Td0hkaEQzdmJabHNzMU5CaGdlbV9Ud0J1SjlHQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiN2EwNmYxY2ItMThjMi00ZGNiLTk0NzktZDk1OGE5OGMzNDFlIiwidGlkIjoiNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0IiwidXRpIjoiU2xJQXNVei1vMEc5eXBJZHNPNVlBQSIsInZlciI6IjEuMCJ9.SNQZquZz7KNG-R6DJBmKUbW-wHtZRyZw5uubN_YOkCY70PYU6ik7OY6o3xw-L_2PBKD9ZYaRV-5EA8zaXZ9aKmkuGSq1XsKsA4MBRESDahHY_67hU8UiMNX2xNtIHtbEy5lcSiMlP6C3HhV-zYzzAQx6Fsq6Tu7xIs0gbZL8NXA4XAJy9Lq631agei2EUeYk5hmUMRqMTsMBXUP6RRQgw4wpIkebeOZIhNHPEv2ivqhQnZOgYBiee-H4yRok6cAGQeLjCcy4gHva4RxVAZ3-teaZqwl_PFxD3lwnmP_2fOM4KEpu2-xN_J-XU-7PSZmmblTIdpvjD-QHFT8IbUOGQA'
  useEffect(() => {
    const show = () => {
      if (window.innerWidth <= 767) {
        setsearch(true);
      } else {  
        setsearch(false);
      }
    };
    
  
    show(); 
    return () => {
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
          console.log(res.data.value[0].Values.split(","))
        }
        )
    };
  }, []);
  
  
  
  
  
  
  

  
  return (
    <div style={{
      width: '78.4vw'
    }}>
      <div className="row1" style={{
        "width":"100vw"
      }}>
        
        <h2>408,426 Results</h2>
        {
      search ? (
        <div className='searchfields'>
          <input type='text' className='searchitems' />
          <button className='searchbtn'>Search</button>
          <div className='iconbar' onClick={() => setisdraweropen(true)}>
            <FaBars />
          </div>
        </div>
      ) : null
    }

    
  
      
      </div >
      <div>
    < CustomPaginationActionsTable />
    </div>
    {/* <ProductTable/> */}
    </div>
    
  )
}

export default ShopRight;
