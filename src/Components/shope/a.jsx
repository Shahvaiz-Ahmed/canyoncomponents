import React, { useState, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../../UserContext";

const Color = () => {
  const { datax, updateData } = React.useContext(UserContext);

  const [selectedItems, setSelectedItems] = useState([]);
  const accessToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0LyIsImlhdCI6MTY4OTI0OTAxMCwibmJmIjoxNjg5MjQ5MDEwLCJleHAiOjE2ODkyNTI5MTAsImFpbyI6IkUyWmdZTkRua2VBM0x4Q3I3MlV1ODFoODlkUmVBQT09IiwiYXBwaWQiOiI2ODE0N2NmZS1kNDcyLTQ3ODgtYTlhYy03YWE4MDQyNDlhOTYiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC80ZTk0ZjA2Zi1kYjAxLTQ3ZWItYWZmMy03YTI4NGIwMWRkODQvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI3YTA2ZjFjYi0xOGMyLTRkY2ItOTQ3OS1kOTU4YTk4YzM0MWUiLCJyaCI6IjAuQVVZQWJfQ1VUZ0hiNjBldjgzb29Td0hkaEQzdmJabHNzMU5CaGdlbV9Ud0J1SjlHQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiN2EwNmYxY2ItMThjMi00ZGNiLTk0NzktZDk1OGE5OGMzNDFlIiwidGlkIjoiNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0IiwidXRpIjoicE52WTFWZVU0MGlTb2xKa1ppNE1BQSIsInZlciI6IjEuMCJ9.QDKibg19LW3jOEvcYLhdcScoJRY9qu8oI6iuGRfDuXt_YXCQEfppjm1NgSR0DiIIUdKvOchOYKr05NNj9ukm_0uAKqQ5xPVCfAaXkngSoqsEDrDUN6wh7LJ1the_ylaMhEknT8xSGXUlHi5PdRTfsJLFKuBF7bTVtpxeWby7U3aUVowiYDRaurwckgBBnmUbo99_NxpCNqknNLk8apkPeMEHyWFru_KYZBQ_gzQivyw8TCIPdubMf4ii2WbA6QCrXSGl-XQ8km2mRnStwBqIj-fOj2Q_aSgtcD9oEmHK_JeJx7FcmbuQv1lLUfohwJPwMyoQFCHC60famn8Mb6KZKw";
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
    const itemName = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      updateData({ ...datax, color: [...selectedItems, itemName] });

      setSelectedItems([...selectedItems, itemName]);
       
    } else {
      setSelectedItems(
        setSelectedItems(selectedItems.filter((item) => item !== itemName))
        // selectedItems.filter((id) => id !== itemId && id !== itemId.id)
      );
    }
  };

   
  return (
    <div>
      {Color && 
        Color.map((item) => {
          return (
            <div key={item.id}>
              <input
                type="checkbox"
                value={item}
                onChange={handleCheckboxChange}
                
              />
              <label>{item}</label>
            </div>
          );
        })
      }
     </div>
  );
};

export default Color;
