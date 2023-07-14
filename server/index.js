const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const path=require('path')
app.use(cors());
app.use(express.static(path.join(__dirname+'/public')))
app.get('/api/data', (req, res) => {
  // Fetch or generate the data to be returned
  let data = 'grant_type=client_credentials&client_id=0598e72a-da3f-4f95-bd93-7a27d0797e68&client_secret=CUv8Q~nKj3RshRdV~yoyA1zuTino9hPM8xCFDbGh&scope=https://api.businesscentral.dynamics.com/.default';

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://login.microsoftonline.com/7c885fa6-8571-4c76-9e28-8e51744cf57a/oauth2/v2.0/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cookie': 'buid=0.AQwApl-IfHGFdkyeKI5RdEz1eirnmAU_2pVPvZN6J9B5fmgMAAA.AQABAAEAAAD--DLA3VO7QrddgJg7Wevr1GhMFAEexcLnic-cVeuELcaQesILRWXCKcB5YDZ4LlAeGxeJC8WNZ3MA-wfbdKbO5cwjku2gA1iq08O1edx8UL0Ikb4_MHz0WHPR7n9ITHEgAA; fpc=Ag971iimUMxPjqKqxwjbt3Y0X6nKAgAAAF0zCtwOAAAA; stsservicecookie=estsfd; x-ms-gateway-slice=estsfd'
    },
    data: data
  };

  var token;

  axios.request(config)
    .then((response) => {
      token = JSON.stringify(response.data);
      console.log(JSON.stringify(response.data));
      res.json(token); // Send the data as the response
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});
// const Port= process.env.PORT ||5000;
app.listen(3001, () => {
  console.log('API server is running on port 3001');
});
