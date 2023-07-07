import axios from 'axios';
import React, { useState, useEffect } from 'react';

function CheckboxList() {
    const [selectedItems, setSelectedItems] = useState([]);
    const [arraydata, setArray] = useState([]);
    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0LyIsImlhdCI6MTY4ODY0NTA2MSwibmJmIjoxNjg4NjQ1MDYxLCJleHAiOjE2ODg2NDg5NjEsImFpbyI6IkUyWmdZUEN2eVVqcUY1WHEzOGd1WlBmNi9aUXdBQT09IiwiYXBwaWQiOiI2ODE0N2NmZS1kNDcyLTQ3ODgtYTlhYy03YWE4MDQyNDlhOTYiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC80ZTk0ZjA2Zi1kYjAxLTQ3ZWItYWZmMy03YTI4NGIwMWRkODQvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI3YTA2ZjFjYi0xOGMyLTRkY2ItOTQ3OS1kOTU4YTk4YzM0MWUiLCJyaCI6IjAuQVVZQWJfQ1VUZ0hiNjBldjgzb29Td0hkaEQzdmJabHNzMU5CaGdlbV9Ud0J1SjlHQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiN2EwNmYxY2ItMThjMi00ZGNiLTk0NzktZDk1OGE5OGMzNDFlIiwidGlkIjoiNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0IiwidXRpIjoiMUo2c1RFaGJxRXl4TVU5OWQ3SmdBQSIsInZlciI6IjEuMCJ9.ODnwUEiOWcjWkxtS7uSqpY-CLq_OvlENr_ekemuQspJBgTBJk5vnfiOzrk_YsUEiq9W_GtYOHkik7RIEi73oaqvfWMK5UlDnDuFe8lkY-EtdwiQWr_W2P5ApG1woRqLY7AVgqyuJTewa2jRCPvYTgt4r7G5_3Myyde_khlpH6S-mbWIUiq7PYr75hUOz2L1p0sDSvC1XLjlXSXNDLfioEi0eWQXjjtZhDVynknGL6dpOhtAfScSuGYSXIByAh9DeEvCzhE2NOkqaGNP2KqIysrrCrzGRsvhShsomTjvhX6M4ySKOgGKAWIH_lf2Zl4BWwFonTzku4rY3_N5bqcheNg'

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