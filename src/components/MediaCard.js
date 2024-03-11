import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    marginLeft: 300
  },
  media: {
    height: 440,
  },
});

const MediaCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require("../images/backend.png")}
          title="Contemplative Reptile"
        />
      </CardActionArea>
    </Card>
  );
}



export default MediaCard
