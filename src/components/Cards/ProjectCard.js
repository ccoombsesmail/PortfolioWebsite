import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 645,
        width: '23vw',
    },
    media: {
        width: "100%",
        height: '30vh'
        
    },
    icon: {
        width: '60px',
        margin: '10px'
    }
});


const MediaCard = (props) => {
    const classes = useStyles();

    var img4 = <div></div>
    if (props.iconSrc4 != "") {
        img4 = <img alt="" className={classes.icon} src={props.iconSrc4} />
    }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.imgSrc}
                    title="Project"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        {props.body}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        ──────────────────────
                    </Typography>
                    <img alt = "" className = {classes.icon} src = {props.iconSrc1} />
                    <img alt = "" className={classes.icon} src={props.iconSrc2} />
                    <img alt = "" className={classes.icon} src={props.iconSrc3} />
                    {/* <img className={classes.icon} src={props.iconSrc4} /> */}
                    {img4}

                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button href= {props.gitRef} size="small" color="primary">
                    Github
                </Button>
                <Button href= {props.siteURL} size="small" color="primary">
                    Check it out
                </Button>
            </CardActions>
        </Card>
    );

}


export default MediaCard