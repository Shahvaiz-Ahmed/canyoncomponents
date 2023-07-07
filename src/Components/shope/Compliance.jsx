import React, { useState, useEffect } from "react";
import axios from "axios";

const Compliance = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const accessToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0LyIsImlhdCI6MTY4ODcxMDE4MiwibmJmIjoxNjg4NzEwMTgyLCJleHAiOjE2ODg3MTQwODIsImFpbyI6IkUyWmdZUGptcDhDMjRzL0xaZFU1NWkvZHBMd2NBQT09IiwiYXBwaWQiOiI2ODE0N2NmZS1kNDcyLTQ3ODgtYTlhYy03YWE4MDQyNDlhOTYiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC80ZTk0ZjA2Zi1kYjAxLTQ3ZWItYWZmMy03YTI4NGIwMWRkODQvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI3YTA2ZjFjYi0xOGMyLTRkY2ItOTQ3OS1kOTU4YTk4YzM0MWUiLCJyaCI6IjAuQVVZQWJfQ1VUZ0hiNjBldjgzb29Td0hkaEQzdmJabHNzMU5CaGdlbV9Ud0J1SjlHQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiN2EwNmYxY2ItMThjMi00ZGNiLTk0NzktZDk1OGE5OGMzNDFlIiwidGlkIjoiNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0IiwidXRpIjoiaFZMRnJSYmxsRWFiRHV6THU2YWZBQSIsInZlciI6IjEuMCJ9.F-zIP_r3rP_Y9YPh2U_FX3Tw39_zulY8tx27HXsbgUOLFJlEV-JRuQTEMBkQ19njBy2a7ALZnjufcSzwpnUsmcvuyiFFm2pIXnYRrQ96zbgw5Zh7Xv0GRgqhWK-FqHfFLjK3Uyho0rzPQyxZtuO7vhJCiE0fH-6Q-DzSMQ8Xs0WhukVxEr4AaaHAm7y2HRtv1SYM0M5lwW5PcwwG2aUc3hezwyz5wfXk5ESJU5wz0PKgpSvOThu0php9f1mYJfoY5ViqUqSZCFFyprTy86N5de7t4UXueSVx4o2ZQlyOpbLqlVLwvx1q3eTAmZgpK-1DscJ68cNwsGaaX9EvgIcIDQ";
  // const [material, setmaterial] = useState()
  const [Compliance, setCompliance] = useState();
  useEffect(() => {
    return () => {
      axios
        .get(
          "https://api.businesscentral.dynamics.com/v2.0/4e94f06f-db01-47eb-aff3-7a284b01dd84/Sandbox/ODataV4/Company(\'My Company\')/itemattributee",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            params: {
              $filter: "Name eq 'NSF 61' or " +
              "Name eq 'FDA Compliant' or " +
              "Name eq 'USP Class VI' or " +
              "Name eq 'NSF 51' or " +
              "Name eq 'UL Listed' or " +
              "Name eq 'Metal Detectable' or " +
              "Name eq '3A Sanitary'",
            },
          }
        )
        .then((res) => {
          setCompliance(res.data.value[0]
            
            
            
            
            .Values.split(","));
          console.log(Compliance);
        });
    };
  }, [Compliance]);

  const handleCheckboxChange = (event) => {
    const itemId = event.target.value;
    if (event.target.checked) {
      setSelectedItems([...selectedItems, itemId]);
    } else {
      setSelectedItems(
        selectedItems.filter((id) => id !== itemId && id !== itemId.id)
      );
    }
    console.log(selectedItems);
  };
  return (
    <div>
      {Compliance ? (
        Compliance.map((item) => {
          return (
            <div key={item.id}>
              <input
                type="checkbox"
                value={item.id}
                onChange={handleCheckboxChange}
              />
              <label>{item}</label>
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default Compliance;
