import React, { useContext, useState, useEffect } from 'react';
// import { UserContext } from '../../UserContext';
import axios from 'axios'

function CheckboxList() {
      const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0LyIsImlhdCI6MTY4ODcxMjE4OSwibmJmIjoxNjg4NzEyMTg5LCJleHAiOjE2ODg3MTYwODksImFpbyI6IkUyWmdZTGg1SUNQdWE5SEpvTVdacWl2eUNxM3VBQUE9IiwiYXBwaWQiOiI2ODE0N2NmZS1kNDcyLTQ3ODgtYTlhYy03YWE4MDQyNDlhOTYiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC80ZTk0ZjA2Zi1kYjAxLTQ3ZWItYWZmMy03YTI4NGIwMWRkODQvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI3YTA2ZjFjYi0xOGMyLTRkY2ItOTQ3OS1kOTU4YTk4YzM0MWUiLCJyaCI6IjAuQVVZQWJfQ1VUZ0hiNjBldjgzb29Td0hkaEQzdmJabHNzMU5CaGdlbV9Ud0J1SjlHQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiN2EwNmYxY2ItMThjMi00ZGNiLTk0NzktZDk1OGE5OGMzNDFlIiwidGlkIjoiNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0IiwidXRpIjoidHB1aDJBZmRvVUdBVTdfNGV0dUJBQSIsInZlciI6IjEuMCJ9.Cirnst5kGzENTuhPPUv5HDx-1GJ7_KJu1-dm9selFqvj_5KK1HUYtFyxzj-Xqk08gnB4OsHfXCDyfu3v0lIEx_f5W71mjAdgMJwF4TtIfekrNHfkyZ3_cNiUkiUB_--1bo9Yzr4OBSTzPHc6jtr6NYiQkadAs69yCZOqrz45UqwytQ74n8WLH28IfEzebSBy9hHJin8sN-_jtUtdaLzj07nz2DlqFgUOCHsV09z94vemFr6jCznrfNsAbqkTJCxECr_7efMtH91lWwIkSiVRoUMdsv-KZuGAcwtNc8gT2Cy3P4iHhC7IrHi_nky_FQxhwnq0DLrWDjLCodk1yoCexQ'
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