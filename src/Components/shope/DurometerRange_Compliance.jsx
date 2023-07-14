import React, { useState, useEffect } from "react";
import axios from "axios";


const DurometerRange_Compliance = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const accessToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0LyIsImlhdCI6MTY4OTMyOTYxMywibmJmIjoxNjg5MzI5NjEzLCJleHAiOjE2ODkzMzM1MTMsImFpbyI6IkUyWmdZQWo1dVhmV3FiTmRmNWVGc0g2Lys3cHJCUUE9IiwiYXBwaWQiOiI2ODE0N2NmZS1kNDcyLTQ3ODgtYTlhYy03YWE4MDQyNDlhOTYiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC80ZTk0ZjA2Zi1kYjAxLTQ3ZWItYWZmMy03YTI4NGIwMWRkODQvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI3YTA2ZjFjYi0xOGMyLTRkY2ItOTQ3OS1kOTU4YTk4YzM0MWUiLCJyaCI6IjAuQVVZQWJfQ1VUZ0hiNjBldjgzb29Td0hkaEQzdmJabHNzMU5CaGdlbV9Ud0J1SjlHQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiN2EwNmYxY2ItMThjMi00ZGNiLTk0NzktZDk1OGE5OGMzNDFlIiwidGlkIjoiNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0IiwidXRpIjoiUHZhb2ZKclh0a0taMXJ0RGJmTVFBQSIsInZlciI6IjEuMCJ9.nVyjjFx4gig-WYf37371E-WtAi_rHx6Z5m2IiOd6HLUhHhUNqPETcQzQPp6s5SCBpGYCVJOG-39zAVtN1rzx6WLBPOJRzME8cX706zedGlWyW3NpF0pfPw0ZXTkxUpRXyA5XiG79TjGbDMMDdvSMSLeDuHStQutbQrLF1FmIcEHaPrEbVMroM-MJ2hlzzpeG48AkwkdwRJFLke3E_e9mZAoLHNvefep-x7IZ289TYCiWNV6assHu7Ga1tO7bsVaYQt_VZo_Acdg5TKQja2UZBtt8HPPf1VsCvoPbcyErZMrf1vt9lLdZnOZxuwnAp2RCoocaQM3ZwOjX-YRmPq4U4Q";
  // const [material, setmaterial] = useState()
  const [DurometerRange_Compliance, setDurometerRange_Compliance] = useState();
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
              $filter: "Name eq 'Durometer Range'",
            },
          }
        )
        .then((res) => {
          setDurometerRange_Compliance(res.data.value[0].Values.split(","));
          console.log(DurometerRange_Compliance);
        });
    };
  }, [DurometerRange_Compliance]);

  const handleCheckboxChange = (event) => {
    const itemId = event.target.value;
    if (event.target.checked) {
        setSelectedItems([...selectedItems, itemId]);
    } else {
        setSelectedItems(selectedItems.filter((id) => id!== itemId && id!== itemId.id));
    }
    console.log(selectedItems);
};
  return (
    <div>
        {DurometerRange_Compliance ? DurometerRange_Compliance.map((item) => {
           return <div key={item.id}>
               
                <input type="checkbox" value={item.id}
                    onChange={handleCheckboxChange}/>
                <label>{item}</label>
            </div>
}):<></>}
    </div>
);
};
  


export default DurometerRange_Compliance