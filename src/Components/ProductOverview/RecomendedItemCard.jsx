import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import recomended from '../../Static/Dimensions.jpg';

function RecomendedItemCard() {
  return (
    <div className="container2">
    <Card sx={{ maxWidth: 345 ,maxhight: 345,borderColor:'black'}}>
      <CardActionArea>
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <strong style={ { color: '#F5976B', fontSize: '1.3rem' } }>CP80BK21-OR-204</strong>
          </Typography>
          <Typography gutterBottom variant="p" component="div">
          <strong style={ { color: 'black', fontSize: '0.9rem' } }>Instock</strong>
          </Typography>
          <CardMedia
          component="img"
          height="180"
          image={recomended}
          alt="product"
        />
          <Typography variant="body2" color="text.secondary">
            <span style={ { color: 'black', fontSize: '1.3rem' } }>Lorem ipsum dolor sit a...</span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )
}

export default RecomendedItemCard