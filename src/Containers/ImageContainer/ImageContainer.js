import React, { Component } from 'react';
import ImageThumbnail from '../../Components/ImageThumbnail/ImageThumbnail';
import ImageList from '../../Components/ImageList/ImageList';
import GridList from '@material-ui/core/GridList';
import styles from './imageContainer.module.css';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';


const API_URL = 'https://rickandmortyapi.com/api/character/?page=19';

export default class ImageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    }
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
    if (this.props.listView) {
      imageComponent = (
        <div>
          {this.state.images.length ? this.state.images.map(image => {
            return (
              <ImageList key={image.id} {...image} />
            )
          }) : (<h2>No image found</h2>)}
        </div>
      )

    } else {
      imageComponent = (
        <div className={styles.flexBox}>
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

        <Container maxWidth="md">
          <Box color="text.primary">
            {imageComponent}
          </Box>
        </Container>
      </div>
    )
  }
}