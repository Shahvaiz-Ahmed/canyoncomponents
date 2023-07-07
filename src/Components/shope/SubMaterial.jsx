import React, { useState, useEffect } from 'react';

import axios from 'axios';


function SubMaterial() {
    const [selectedItems, setSelectedItems] = useState([]);
    const [arraydata, setArray] = useState([]);
    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0LyIsImlhdCI6MTY4ODY0NTY0OCwibmJmIjoxNjg4NjQ1NjQ4LCJleHAiOjE2ODg2NDk1NDgsImFpbyI6IkUyWmdZUGlZZnZuVi9RZXgvbnBNMVpadlc5ODlBUUE9IiwiYXBwaWQiOiI2ODE0N2NmZS1kNDcyLTQ3ODgtYTlhYy03YWE4MDQyNDlhOTYiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC80ZTk0ZjA2Zi1kYjAxLTQ3ZWItYWZmMy03YTI4NGIwMWRkODQvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI3YTA2ZjFjYi0xOGMyLTRkY2ItOTQ3OS1kOTU4YTk4YzM0MWUiLCJyaCI6IjAuQVVZQWJfQ1VUZ0hiNjBldjgzb29Td0hkaEQzdmJabHNzMU5CaGdlbV9Ud0J1SjlHQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiN2EwNmYxY2ItMThjMi00ZGNiLTk0NzktZDk1OGE5OGMzNDFlIiwidGlkIjoiNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0IiwidXRpIjoiTElscVFvX1Vla3VpR01uSmRwaHNBQSIsInZlciI6IjEuMCJ9.l27igEbBY8ko_RfQffK6X6bT1gFPEb3D73EbNqlt2CJsV8Nx2GvgogVQY2ry1hOKIGN5yd6zegPa-nwmJZz-_xLAlVOOYJ2ae16fSdrte00mM1bMTHA4m9KlTHsiwMVBGOZV93daT0QEGVDHatR6xdP9y2JOOXMkTDY9FS8oRm_pR3N6qPggGiOAzcUyhf0N1xX7hfYm2QKX3CCoPpnTXPwyQR73Uiq3849q0xXP8XHJ6XCDfRHpVr4dOePWchzTJbcY6bHDU0uZuhYV5wDcCyavvPUPd54K7FG8DYj_xlaPOp7fQFeNzb4NXEo3vV6SN1fPuHp9H8WajT15gKCieA'

const handleCheckboxChange = (event) => {
    const itemId = event.target.value;
    if (event.target.checked) {
        setSelectedItems([...selectedItems, itemId]);
    } else {
        setSelectedItems(selectedItems.filter((id) => id!== itemId && id!== itemId.id));
    }
    console.log(selectedItems);
};
useEffect(()=>{
    axios.get(
      'https://api.businesscentral.dynamics.com/v2.0/4e94f06f-db01-47eb-aff3-7a284b01dd84/Sandbox/ODataV4/Company(%27My%20Company%27)/itemattributee',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          $filter: "Material Subtype'",
        },
      }
      ).then((res)=>{
         const array = res.data.value[0].Values.split(",");
         console.log(array);
         setArray(array);
      }
      )
  },[arraydata])

    return (
        <div>
            {arraydata ? arraydata.map((item) => (
                <div key={item.id}>
                   
                    <input type="checkbox" value={item.id}
                        onChange={handleCheckboxChange}/>
                    <label>{item}</label>
                </div>
            )): 'null'}
        </div>
    );
}

export default SubMaterial;
