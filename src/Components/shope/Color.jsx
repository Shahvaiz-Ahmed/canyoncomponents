import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../UserContext";

const Color = () => {
  const { datax, updateData } = useContext(UserContext); // Access the UserContext


  const accessToken ='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0LyIsImlhdCI6MTY4OTMyNTM5MCwibmJmIjoxNjg5MzI1MzkwLCJleHAiOjE2ODkzMjkyOTAsImFpbyI6IkUyWmdZTmk3T2ZXYjhLT0tWZW9mYmJWQ0R0b0pBUUE9IiwiYXBwaWQiOiI2ODE0N2NmZS1kNDcyLTQ3ODgtYTlhYy03YWE4MDQyNDlhOTYiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC80ZTk0ZjA2Zi1kYjAxLTQ3ZWItYWZmMy03YTI4NGIwMWRkODQvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI3YTA2ZjFjYi0xOGMyLTRkY2ItOTQ3OS1kOTU4YTk4YzM0MWUiLCJyaCI6IjAuQVVZQWJfQ1VUZ0hiNjBldjgzb29Td0hkaEQzdmJabHNzMU5CaGdlbV9Ud0J1SjlHQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiN2EwNmYxY2ItMThjMi00ZGNiLTk0NzktZDk1OGE5OGMzNDFlIiwidGlkIjoiNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0IiwidXRpIjoialJsSnp4UE55MHFHTEw1ZDEwQVVBQSIsInZlciI6IjEuMCJ9.ZeIPKqJBxEqx_gL-sbyA2B6xwdI6AZZIYJB10SpsFmJAyguHeEia4uezK8iqUxw61wd5hzegYls69cTPCpYoDrtYtfcqyv61RmYiyz9dQRSXS1Awt21DqVVSLzqgO40lJUjDKP_IBEPwRKwbb8vjzwPd8aIMGEfS5vlwugKp78KUZ4up6g93y2z3A5d1XiiXu3to8BdnR1KUUImbJJxdUSsibJBBlWt_r_ZDbGGwqjkoRZehcjbXPn3RI52oRvG0kJpWfqP-nXVXfmWpjmL3--hjYaX9wP5p9ZFloX0vmDN-pO16TwVw4oXlkgk52aIbeffb2jYeuad4a32Z6Z-7Mw';

  const [Color, setColor] = useState([]);

  useEffect(() => {
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
  }, []);

  const handleCheckboxChange = (event) => {
    const itemName = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      // Add the selected item to the data state
      updateData({ ...datax, color: [...datax.color, itemName] });
    } else {
      // Remove the selected item from the data state
      updateData({ ...datax, color: datax.color.filter((item) => item !== itemName) });
    }
  };

  return (
    <div>
      {Color &&
        Color.map((item) => {
          return (
            <div key={item}>
              <input
                type="checkbox"
                value={item}
                checked={datax.color.includes(item)} // Set the checkbox state based on the data state
                onChange={handleCheckboxChange}
              />
              <label>{item}</label>
            </div>
          );
        })}
    </div>
  );
};

export default Color;
