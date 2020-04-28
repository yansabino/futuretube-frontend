import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import DeleteIcon from "@material-ui/icons/Delete";
import DetailsIcon from "@material-ui/icons/Details";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 200,
    height: 350,
    mWidth: 200,
    maxHeight: 350,
    zIndex: 0,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },

  avatar: {
    backgroundColor: red[500],
  },
}));

export default function VideoCard(props) {
  const classes = useStyles();
  const isLogged = window.localStorage.getItem("token");
  let buttonRender;

  if (isLogged) {
    buttonRender = (
      <CardActions>
        <IconButton aria-label="delete videos" onClick={props.deleteVideo}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="video details" onClick={props.videoDetails}>
          <DetailsIcon />
          Details
        </IconButton>
      </CardActions>
    );
  } else {
    buttonRender = (
      <CardActions>
        <IconButton aria-label="video details" onClick={props.videoDetails}>
          <DetailsIcon />
          Details
        </IconButton>
      </CardActions>
    );
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar> // user picture
        }
        title={props.videoTitle}
      />
      <iframe
        width="200"
        height="150"
        src={props.videoUrl}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allownetworking="internal"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.videoDescription}
        </Typography>
      </CardContent>
      {buttonRender}
    </Card>
  );
}
