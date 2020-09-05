import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 300,
    height: 250,
    padding:'20px',
    borderRadius:10
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
    fontSize:12,
    lineHeight:20
  },
}));

export default function ImageThumbnail(props) {
  const classes = useStyles();
  return (
    <GridListTile key={props.id} className={classes.gridList}>
      <img src={props.urls.regular} alt={props.title} />
      <GridListTileBar
        title={props.alt_description}
        subtitle={<span>by: {props.user.name}</span>}
        actionIcon={
          <IconButton className={classes.icon}>
            <ThumbUpIcon /> {props.likes} 
          </IconButton>
        }
      />
    </GridListTile>
  );
}
