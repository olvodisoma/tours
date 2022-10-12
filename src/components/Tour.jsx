import React,{useState,useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const Tour=({image,title,info,price})=> {
    const [infoPartial,setInfoPartial] = useState('')

    useEffect(() => {
        const text50 = info.slice(0,50)
        const lastSpacePos = text50.lastIndexOf(' ')
        setInfoPartial(text50.slice(0,lastSpacePos))
    },[])

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {infoPartial}...
          <Button size="small">Read More</Button>
        </Typography>
      </CardContent>
      <CardActions>
        <p size="small">Price: ${price}</p>
      </CardActions>
    </Card>
  )
}
