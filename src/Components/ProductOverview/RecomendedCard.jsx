import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function RecomendedCard(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div" >
          {props.name}
        </Typography>
        <Typography variant="h5" component="div" sx={{ fontSize: 14 }} >
          {props.availability}
        </Typography>
        <img src={props.img} alt="pro" style={{
          maxHeight:'190px',
          maxWidth: '190px'
        }} />
        
        <Typography variant="body2">
          {props.desc}
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained" sx={{ backgroundColor: '#F4976C', fontWeight: '400', width: '100%' }}>View Item</Button>
      </CardActions>
    </Card>
  );
}