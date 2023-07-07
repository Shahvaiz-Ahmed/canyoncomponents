import React, { useContext, useState, useEffect } from 'react';
// import { UserContext } from '../../UserContext';
// import axios from 'axios'
import axios from 'axios'



function CheckboxList() {
      const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0LyIsImlhdCI6MTY4ODcyOTc0OCwibmJmIjoxNjg4NzI5NzQ4LCJleHAiOjE2ODg3MzM2NDgsImFpbyI6IkUyWmdZR2pPZnlYRE1UdVRRYS81WTZEcm80aWxBQT09IiwiYXBwaWQiOiI2ODE0N2NmZS1kNDcyLTQ3ODgtYTlhYy03YWE4MDQyNDlhOTYiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC80ZTk0ZjA2Zi1kYjAxLTQ3ZWItYWZmMy03YTI4NGIwMWRkODQvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI3YTA2ZjFjYi0xOGMyLTRkY2ItOTQ3OS1kOTU4YTk4YzM0MWUiLCJyaCI6IjAuQVVZQWJfQ1VUZ0hiNjBldjgzb29Td0hkaEQzdmJabHNzMU5CaGdlbV9Ud0J1SjlHQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiN2EwNmYxY2ItMThjMi00ZGNiLTk0NzktZDk1OGE5OGMzNDFlIiwidGlkIjoiNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0IiwidXRpIjoiUDE5WUhXVmNHa2lKMWNCYjZBbVVBQSIsInZlciI6IjEuMCJ9.JsUMm4hPNGTdzMqzKNea1GzSOi6g-rjaAE9D8u71MCxdSnie1kAR4SZYWtQ79ZnIpulRy1Xy3qrIcrskr89R8N7YCN_BxyYjKQBkO5bQwIEkhQRQGAUDAfyENKbRf_lgtXhWspg1enCypKam-ADZ1gQu0GEAyAWKugNIkqwNaD_KM09IZBFvj10IQJ5wZSdjgWZcVXdG-VsZNswiogBfZpSf47TOk7Dk8w-GJxhfZAIXPy4Hc_OIkuPnKCT0NSdRGA-oiiRqst35xBxEOWaecogXhfong-3H2S50FqfNuBi3Kt_aaMNTlCc1zpoyHQF0QmwzuOw3arX6yYawfkONxQ'
    const [selectedItems, setSelectedItems] = useState([]);
    const [arraydata, setArray] = useState([]);

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
          $filter: "Name eq 'Material'",
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

export default CheckboxList;