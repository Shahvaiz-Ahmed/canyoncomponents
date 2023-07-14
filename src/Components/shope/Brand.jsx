import React, { useState, useEffect } from "react";
import axios from "axios";


const Brand = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const accessToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0LyIsImlhdCI6MTY4OTMyNjU0NSwibmJmIjoxNjg5MzI2NTQ1LCJleHAiOjE2ODkzMzA0NDUsImFpbyI6IkUyWmdZSENlL1A1YXBpdW5OTjhzMTdqRGFySFRBUT09IiwiYXBwaWQiOiI2ODE0N2NmZS1kNDcyLTQ3ODgtYTlhYy03YWE4MDQyNDlhOTYiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC80ZTk0ZjA2Zi1kYjAxLTQ3ZWItYWZmMy03YTI4NGIwMWRkODQvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI3YTA2ZjFjYi0xOGMyLTRkY2ItOTQ3OS1kOTU4YTk4YzM0MWUiLCJyaCI6IjAuQVVZQWJfQ1VUZ0hiNjBldjgzb29Td0hkaEQzdmJabHNzMU5CaGdlbV9Ud0J1SjlHQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiN2EwNmYxY2ItMThjMi00ZGNiLTk0NzktZDk1OGE5OGMzNDFlIiwidGlkIjoiNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0IiwidXRpIjoiOGV5ci0yenJEMGVZeHdDZkxTRThBQSIsInZlciI6IjEuMCJ9.XXx16VQNMoS1s1m8__jdUCBUv7OE4rL1IQ3_8ovRpq8nMRDhfR1xmTO3fZ_mhyKxL82CjSLskrrWD0oT25XtrWlz6VzmWQsGTkuPEq-f4TvI_lLrGusqkpC7WpmzaDGBf-x2e4jL5lF3syV6c1ObPjJucoqxb7JPvh00IbahHe6hz73WC2RwhjHrzNefqgNOPVS8sZHdJy8gYsKuclvqfIdWVKXbmglQ5wlVkQqgyTBNwuHbIoxrlwJxNiH7ryvgatYk78oNVGaFrx0l3iMvakZ9hoOEYHp_3Xyo0ldvcl8FCJBVsvzjTLL62GQUQ446ZWgh0cM2ShUUmefNvym_8A";
  // const [material, setmaterial] = useState()
  const [Brand, setBrand] = useState();
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
              $filter: "Name eq 'Brand'",
            },
          }
        )
        .then((res) => {
          setBrand(res.data.value[0].Values.split(","));
         });
    };
  }, [Brand]);

  const handleCheckboxChange = (event) => {
    const itemId = event.target.value;
    if (event.target.checked) {
        setSelectedItems([...selectedItems, itemId]);
    } else {
        setSelectedItems(selectedItems.filter((id) => id!== itemId && id!== itemId.id));
    }
 };
  return (
    <div>
        {Brand ? Brand.map((item) => {
           return <div key={item.id}>
               
                <input type="checkbox" value={item.id}
                    onChange={handleCheckboxChange}/>
                <label>{item}</label>
            </div>
}):<></>}
    </div>
);
};
  


export default Brand