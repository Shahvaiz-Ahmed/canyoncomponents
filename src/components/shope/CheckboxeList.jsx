import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../UserContext';
import axios from 'axios'

function CheckboxList() {
      const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0LyIsImlhdCI6MTY4ODY0Mjk3OCwibmJmIjoxNjg4NjQyOTc4LCJleHAiOjE2ODg2NDY4NzgsImFpbyI6IkUyWmdZTGg1SUNQdWE5SEpvTVdacWl2eUNxM3VBQUE9IiwiYXBwaWQiOiI2ODE0N2NmZS1kNDcyLTQ3ODgtYTlhYy03YWE4MDQyNDlhOTYiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC80ZTk0ZjA2Zi1kYjAxLTQ3ZWItYWZmMy03YTI4NGIwMWRkODQvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI3YTA2ZjFjYi0xOGMyLTRkY2ItOTQ3OS1kOTU4YTk4YzM0MWUiLCJyaCI6IjAuQVVZQWJfQ1VUZ0hiNjBldjgzb29Td0hkaEQzdmJabHNzMU5CaGdlbV9Ud0J1SjlHQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiN2EwNmYxY2ItMThjMi00ZGNiLTk0NzktZDk1OGE5OGMzNDFlIiwidGlkIjoiNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0IiwidXRpIjoiT3VoVlc1d2lBVUstRmxwUFFldHlBQSIsInZlciI6IjEuMCJ9.IvYgh-hS_4K8UAn6oWqAutO-Pr5HHXGd73y6FUox4LMiIJPvX62U2FlGHFKzdkYmyqDzMNKWsuju9vrYyULe52V3lzNHrfPnfQ1lwzWUnzgcZBhS9nVS-uOa5Fbx2eCL2ZytAjgd-a3mZoyrGU4X0K3c2PM1WOb2l7nbzpr-VFT_sc_obv7XTEKdPjEsxmpe-iEwF7kxU_KonKeC8cgYx620iGzm0mePXssvD3gGlDCeHcKnvk1I_Fes4m3RScyBFfe5RBDnaxEY2vPB3rcTkMbO80QNXyUqDk9gXqhzANqiLjHLYXj6ZCpalMXqNFJNYy62jWLK3JmGJlVy1uJaWQ'
    const [selectedItems, setSelectedItems] = useState([]);
    // const {material} = useContext(UserContext)
    const [material, setmaterial] = useState()
     useEffect(() => {
     return () => {
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
            setmaterial(res.data.value[0].Values.split(','))
            console.log(material);
  
           
          }
          )
      }
    }, [material])

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
            {material ? material.map((item) => {
               return <div key={item.id}>
                   
                    <input type="checkbox" value={item.id}
                        onChange={handleCheckboxChange}/>
                    <label>{item}</label>
                </div>
}):<></>}
        </div>
    );
}

export default CheckboxList;