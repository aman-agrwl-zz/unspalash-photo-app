import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: '20px auto',
    maxWidth: 1000,
    textAlign: 'left',
  },
  image: {
    width: 210,
    height: 158,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ImageList(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={props.urls.regular} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {props.alt_description}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <ThumbUpIcon/>{props.likes} 
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  by: {props.user.name}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
            <Typography variant="subtitle1">{props.created}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
