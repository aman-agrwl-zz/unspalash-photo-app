import React, { Component } from 'react';
import ImageThumbnail from '../../Components/ImageThumbnail/ImageThumbnail';
import ImageList from '../../Components/ImageList/ImageList';
import GridList from '@material-ui/core/GridList';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import ListIcon from '@material-ui/icons/List';
import styles from './imageContainer.module.css'; 


const API_URL = 'https://rickandmortyapi.com/api/character/?page=19';

export default class ImageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      listView: false
    }
  }

  toggleView = () => {
    this.setState((state, props) => {
      return { listView: !state.listView };
    });
  }

  componentDidMount() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log("data ", data);
        this.setState({
          images: data.results

        });
      });
  }


  render() {
    let imageComponent = null;
    // const classes = useStyles();
    if (this.state.listView) {
      imageComponent = (
        <div>
          <ListIcon onClick={this.toggleView} />
          {this.state.images.length ? this.state.images.map(image => {
            // const listView = this.state.listView;
            return (
              <ImageList key={image.id} {...image} />
            )
          }) : (<h2>No image found</h2>)}
        </div>
      )

    } else {
      imageComponent = (
        <div className={styles.flexBox}>
          <ViewComfyIcon onClick={this.toggleView} />
          <GridList cellHeight={180} className={styles.gridList}>
            {this.state.images.length ? this.state.images.map(image => {
              return (
                <ImageThumbnail key={image.id} {...image} />
              )
            }) : (<h2>No image found</h2>)}
          </GridList>
        </div>
      )

    }
    return (
      <div>
        <h2>Images from unsplash</h2>
        {imageComponent}
      </div>
    )
  }
}