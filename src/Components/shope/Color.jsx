import React, { useState, useEffect } from "react";
import axios from "axios";


const Color = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const accessToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0LyIsImlhdCI6MTY4OTA4MzkwNiwibmJmIjoxNjg5MDgzOTA2LCJleHAiOjE2ODkwODc4MDYsImFpbyI6IkUyWmdZRWh5Y1BRN3ZMcktjb25KSW9YWDdXSE5BQT09IiwiYXBwaWQiOiI2ODE0N2NmZS1kNDcyLTQ3ODgtYTlhYy03YWE4MDQyNDlhOTYiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC80ZTk0ZjA2Zi1kYjAxLTQ3ZWItYWZmMy03YTI4NGIwMWRkODQvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI3YTA2ZjFjYi0xOGMyLTRkY2ItOTQ3OS1kOTU4YTk4YzM0MWUiLCJyaCI6IjAuQVVZQWJfQ1VUZ0hiNjBldjgzb29Td0hkaEQzdmJabHNzMU5CaGdlbV9Ud0J1SjlHQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiN2EwNmYxY2ItMThjMi00ZGNiLTk0NzktZDk1OGE5OGMzNDFlIiwidGlkIjoiNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0IiwidXRpIjoiYW1oWnNmZV9ka0NGV1pTYmtZNGtBQSIsInZlciI6IjEuMCJ9.eAbdudKqyqP3TccbgvnZAncqLqriXwoY4hfl7TBAf6Fe_jP1sV0T4t65uJA2N6mvALN9dtN-Of4gbXbkbrJo19SfORL7OIDo7j54IK1LiWBWiTz2snwYNkj3p31Z_UFFAGBTh_-Kx3XypoPZ7zPM1u7cDQexRi5gXAKmz8dUsmPURUqOOexRsCgh1gPDv_XI2veeecHbVjeam_a2c5oG_WoYUthOvx09HLEMFNHNS-AUfMxae9wmIcreGENmgbO-CKt87AE-QJkafu3Dqny-0Fh8C0ZOWW1k77LCv1oTjPsFXY010WPGqXlvhs-anl7qqxa4Nk9qpdbglufbAoBFTg";
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
          console.log(Color);
        });
    };
  }, [Color]);

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
        {Color ? Color.map((item) => {
           return <div key={item.id}>
               
                <input type="checkbox" value={item.id}
                    onChange={handleCheckboxChange}/>
                <label>{item}</label>
            </div>
}):<></>}
    </div>
);
};
  


export default Color