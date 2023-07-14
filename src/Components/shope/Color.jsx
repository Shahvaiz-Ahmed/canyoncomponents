import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../UserContext";

const Color = () => {
  const { accessToken ,selectedcolor,setselectedcolor} = useContext(UserContext);
  const [brands, setBrands] = useState([]);

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
        setBrands(res.data.value[0].Values.split(","));
      })
      .catch((error) => {
        console.error("Error retrieving brands:", error);
      });
  }, [accessToken]);

  const handleCheckboxChange = (event) => {
    const itemId = event.target.value;
    if (event.target.checked) {
      setselectedcolor((prevItems) => [...prevItems, itemId]);
    } else {
      setselectedcolor((prevItems) =>
        prevItems.filter((id) => id !== itemId)
      );
    }
  };

  return (
    <div>
      {brands.map((brand) => (
        <div key={brand}>
          <input
            type="checkbox"
            value={brand}
            onChange={handleCheckboxChange}
          />
          <label>{brand}</label>
        </div>
      ))}
    </div>
  );
};

export default Color;

