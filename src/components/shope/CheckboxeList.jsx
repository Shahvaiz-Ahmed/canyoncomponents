import React, { useContext, useState, useEffect } from 'react';
// import { UserContext } from '../../UserContext';
// import axios from 'axios'
import axios from 'axios'



function CheckboxList() {
      const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0LyIsImlhdCI6MTY4OTIzOTc1MCwibmJmIjoxNjg5MjM5NzUwLCJleHAiOjE2ODkyNDM2NTAsImFpbyI6IkUyWmdZUGdYSWRaMjlaQjJrK0JPZzBPdjd3VzlBUUE9IiwiYXBwaWQiOiI2ODE0N2NmZS1kNDcyLTQ3ODgtYTlhYy03YWE4MDQyNDlhOTYiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC80ZTk0ZjA2Zi1kYjAxLTQ3ZWItYWZmMy03YTI4NGIwMWRkODQvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI3YTA2ZjFjYi0xOGMyLTRkY2ItOTQ3OS1kOTU4YTk4YzM0MWUiLCJyaCI6IjAuQVVZQWJfQ1VUZ0hiNjBldjgzb29Td0hkaEQzdmJabHNzMU5CaGdlbV9Ud0J1SjlHQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiN2EwNmYxY2ItMThjMi00ZGNiLTk0NzktZDk1OGE5OGMzNDFlIiwidGlkIjoiNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0IiwidXRpIjoiQ19oZ0NPQjZPay1xY2RVeGNaVUtBQSIsInZlciI6IjEuMCJ9.fnGTEVyvwQ1gT_91jY-KTu4A08_bttQbCY7da1uPRq7sgXV81GZxaVt-N2HK4hnXz44yj-34GPmdUTn1g7_1zyB3iu9IvVDAp4WZrGReBixleWOIIv1Ew5al3BcVbGhmHSlwlivYlAdPfDHlD2DiLluP_rGjcVvVldEqaa2iCU7UxORilKbyV50W-xbVpEA5clPLhoZrd2fImCMfAgeVCGvEaqmDtzb31Q66-oIjrEZlcbAyHod14GMztws3KRJC2HXOGvE7s-ZYNGautAI5NXJB0MA5XsY1WAFe92MxW_NLng2YCMGxj0TPtq1EgdHA5LF6Qv_rA1F_kMOuveyM0g'
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