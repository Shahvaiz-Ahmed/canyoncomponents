import React from 'react'

const SubMaterial = () => {
    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0LyIsImlhdCI6MTY4ODYzNzUxOCwibmJmIjoxNjg4NjM3NTE4LCJleHAiOjE2ODg2NDE0MTgsImFpbyI6IkUyWmdZTkRua2VBM0x4Q3I3MlV1ODFoODlkUmVBQT09IiwiYXBwaWQiOiI2ODE0N2NmZS1kNDcyLTQ3ODgtYTlhYy03YWE4MDQyNDlhOTYiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC80ZTk0ZjA2Zi1kYjAxLTQ3ZWItYWZmMy03YTI4NGIwMWRkODQvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI3YTA2ZjFjYi0xOGMyLTRkY2ItOTQ3OS1kOTU4YTk4YzM0MWUiLCJyaCI6IjAuQVVZQWJfQ1VUZ0hiNjBldjgzb29Td0hkaEQzdmJabHNzMU5CaGdlbV9Ud0J1SjlHQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiN2EwNmYxY2ItMThjMi00ZGNiLTk0NzktZDk1OGE5OGMzNDFlIiwidGlkIjoiNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0IiwidXRpIjoiRWdwaldJWlYya3EwSzdxQnd6OU1BQSIsInZlciI6IjEuMCJ9.HxgZyUInyzq5IpakCX-jyVPtkwn8rnH9213Y7c9hPw5YjmbcYSbd5ZDgZ0ZcncYaotAIpnCWOyisMecrF70dqRcOf27Mm2j9a2GgsykSkq-2EFteV6vDFHXJ4aFS_JaQ3GkfhYF6rcjt9iFWCe_v9Wuwwe_R-cR3mimHU4JZDLMOTH7-iECChKyiQf_gukZf-zkpGQHHS8uz7woNLLyQkl8eKOioWWCy7Dx_jWtuDuHJQEK8Dza5-uabH5_TpLzAGON2TY6NYLi5uHaVSjQ8WEh5t_HYIJ6gX5mRnGKiN_XWdXB2l3SlPXq9m3Iu1-dBSwCTs5Do1sNvv10VTA419Q'
    // const [material, setmaterial] = useState()
  const [SubMaterial, setSubMaterial] = useState()
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
           setSubMaterial(res.data.value[0].Values.split(','))
           console.log(material);
 
          
         }
         )
     }
   }, [SubMaterial])
  return (
   
    <></>
  )
}

export default SubMaterial