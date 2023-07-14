import React, { useState, useEffect } from 'react';

import axios from 'axios';


function SubMaterial() {
    const [selectedItems, setSelectedItems] = useState([]);
    const [arraydata, setArray] = useState([]);
    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0LyIsImlhdCI6MTY4OTMzMDAwNCwibmJmIjoxNjg5MzMwMDA0LCJleHAiOjE2ODkzMzM5MDQsImFpbyI6IkUyWmdZREF5KzdUMmp1cmkwNjlPRlB3NW8veFpGUUE9IiwiYXBwaWQiOiI2ODE0N2NmZS1kNDcyLTQ3ODgtYTlhYy03YWE4MDQyNDlhOTYiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC80ZTk0ZjA2Zi1kYjAxLTQ3ZWItYWZmMy03YTI4NGIwMWRkODQvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI3YTA2ZjFjYi0xOGMyLTRkY2ItOTQ3OS1kOTU4YTk4YzM0MWUiLCJyaCI6IjAuQVVZQWJfQ1VUZ0hiNjBldjgzb29Td0hkaEQzdmJabHNzMU5CaGdlbV9Ud0J1SjlHQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiN2EwNmYxY2ItMThjMi00ZGNiLTk0NzktZDk1OGE5OGMzNDFlIiwidGlkIjoiNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0IiwidXRpIjoiaGR2X2J2YXBGVWktWHFtQjJvRV9BQSIsInZlciI6IjEuMCJ9.lzJQ_tFzdU8grgyTPqLRcvIXHcmUc9VIE6uw-jN8Sd1agispB0elqYbVbGIvyynozktp9PY4Zbtyrbki43RHS5vIHjMa5QTt_yrEuTW0yqY22Gc9IpEG3VmUI1IqyhURnz1UmPlZz3WmUuwM__nHOojLXTjPCFPQwFnD_ayLQmsS8zE0C50cOdMj2zbRaETUDn1DXv3DNK6Imqr-di31ERDsA-CZKcwJQBvWcsQbs2NSlRT2Fz6Mdqu5ss5IhhNMXcZwaqzSbpNl_4z_n2rAyF5oHLh8qeckoOJYlJ70PXi2nIlNahZDpQXdn0O6xdwxUpwv-rTlGmYrzY-c5vcq2A';

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
          $filter: "MaterialSubtype",
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
