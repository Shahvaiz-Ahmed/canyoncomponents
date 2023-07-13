import React, { useState, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../../UserContext";

 

const Color = () => {
  const { datax, updateData } = React.useContext(UserContext);


    const [selectedItems, setSelectedItems] = useState([]);
    const accessToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0LyIsImlhdCI6MTY4OTI0NDg4MSwibmJmIjoxNjg5MjQ0ODgxLCJleHAiOjE2ODkyNDg3ODEsImFpbyI6IkUyWmdZTmg1dUlyVnYvcUk4a3FlODZmdXR1aFZBd0E9IiwiYXBwaWQiOiI2ODE0N2NmZS1kNDcyLTQ3ODgtYTlhYy03YWE4MDQyNDlhOTYiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC80ZTk0ZjA2Zi1kYjAxLTQ3ZWItYWZmMy03YTI4NGIwMWRkODQvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI3YTA2ZjFjYi0xOGMyLTRkY2ItOTQ3OS1kOTU4YTk4YzM0MWUiLCJyaCI6IjAuQVVZQWJfQ1VUZ0hiNjBldjgzb29Td0hkaEQzdmJabHNzMU5CaGdlbV9Ud0J1SjlHQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiN2EwNmYxY2ItMThjMi00ZGNiLTk0NzktZDk1OGE5OGMzNDFlIiwidGlkIjoiNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0IiwidXRpIjoiQlU5U1FNaUpFRWViTVRNRnV2a05BQSIsInZlciI6IjEuMCJ9.lvGJoKvq0l3yjw70N4xYCO1EUq0sxDu0tXO95aU7jGdb3--BuzyK7QYuWfHkHzW_gldhPeiAfpxl75ldVG4rjOTNmhussFNsvIlscZvfG9ypLFNGoknHT0pQp2Pqj5_ihpKteNeINOja--raXadleB1DqonVsUzMOsni6RQ8Xm0KRKmceOYTKyHXeBdC0Y0xLXX6AfcyROpF4gQi_3nEXZWN-0bsgnmyMS8jc5gUtlrH_-C9aM_P4bqHg95IBB4is9bQUqonzpSve8cmEyXgop0w6Ciq3VagzYqnNUDllvoE5XqvUqdjDlBVntzlTQpf2mfi2mQDR2LhwfVjRf68wQ";
  // const [material, setmaterial] = useState()
  const [Color, setColor] = useState();
  useEffect(() => {
    return () => {
      axios
        .get(
          "https://api.businesscentral.dynamics.com/v2.0/4e94f06f-db01-47eb-aff3-7a284b01dd84/Sandbox/ODataV4/Company(%27My%20Company%27)/itemattributee",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            params: {
              $filter: "Name eq 'Color'",
            },
          }
        )
        .then((res) => {
        
          setColor(res.data.value[0].Values.split(","));
         });
    };
  }, [Color]);
   const handleCheckboxChange = (event) => {
    const itemId = event.target.value;
    if (event.target.checked) {
      setSelectedItems([...selectedItems, itemId]);
      console.log(selectedItems)

    } else {
        setSelectedItems(selectedItems.filter((id) => id!== itemId && id!== itemId.id));
    }
 };
  return (
    <div>
        {Color ? Color.map((item) => {
           return <div key={item.id}>
               
                <input type="checkbox" value={item}
                    onChange={handleCheckboxChange}/>
                <label>{item}</label>
            </div>
}):<></>}
    </div>
);
};
  


export default Color