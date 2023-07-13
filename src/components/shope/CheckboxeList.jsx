import React, { useContext, useState, useEffect } from 'react';
// import { UserContext } from '../../UserContext';
// import axios from 'axios'
import axios from 'axios'



function CheckboxList() {
      const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0LyIsImlhdCI6MTY4OTI1MzU2NywibmJmIjoxNjg5MjUzNTY3LCJleHAiOjE2ODkyNTc0NjcsImFpbyI6IkUyWmdZQWplekdlVzZocmxmT3BtOEVWOU8va0dBQT09IiwiYXBwaWQiOiI2ODE0N2NmZS1kNDcyLTQ3ODgtYTlhYy03YWE4MDQyNDlhOTYiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC80ZTk0ZjA2Zi1kYjAxLTQ3ZWItYWZmMy03YTI4NGIwMWRkODQvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI3YTA2ZjFjYi0xOGMyLTRkY2ItOTQ3OS1kOTU4YTk4YzM0MWUiLCJyaCI6IjAuQVVZQWJfQ1VUZ0hiNjBldjgzb29Td0hkaEQzdmJabHNzMU5CaGdlbV9Ud0J1SjlHQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiN2EwNmYxY2ItMThjMi00ZGNiLTk0NzktZDk1OGE5OGMzNDFlIiwidGlkIjoiNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0IiwidXRpIjoiNEx0eHJrTy1PRXFzS19KWi1ob1VBQSIsInZlciI6IjEuMCJ9.KHpWvMK8BNEAWw6M6rPGdpfvb79ADY3xZuv4qn9sZEaeLQm4Qvq8Vconqx1TWHNcDUSXU2VVlhLCbLrMxJiNJnZ6eGXSdGiafkJlzd4rq1-n4MfL9UMxMf20F0Se7hE4fHQskyNc9M7hizBOg8-cBnnXh75wu3D8LcrNB82bZNc6d1vAgNCS4mjpCaQ00iKeAmU773SsiOwPWUdTV31r6ffo1H4soP0HVY5VWw47OxOssTQBstWbMDsihppFI-Dxfj0iacQW5B1u5emUpq8xA2oAl6qdG9goY3AC1iTRbRJ0peWx_6nMdZ8cIdKxifWCuSIoCHHcQQcWTj2lVsRg8Q'
    const [selectedItems, setSelectedItems] = useState([]);
    const [arraydata, setArray] = useState([]);

const handleCheckboxChange = (event) => {
    const itemId = event.target.value;
    if (event.target.checked) {
        setSelectedItems([...selectedItems, itemId]);
    } else {
        setSelectedItems(selectedItems.filter((id) => id!== itemId && id!== itemId.id));
    }
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