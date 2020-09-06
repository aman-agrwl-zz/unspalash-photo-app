import React, { Component } from 'react';
import ImageThumbnail from '../../Components/ImageThumbnail/ImageThumbnail';
import ImageList from '../../Components/ImageList/ImageList';
import GridList from '@material-ui/core/GridList';
import styles from './imageContainer.module.css';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import noResults from '../../no-results.jpg';
// import Pagination from '@material-ui/lab/Pagination';

const API_URL = process.env.REACT_APP_API_URL
export default class ImageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      loadingError: false
    }
  }

  fetchImages() {
    const photosUrl = this.props.query ? `${API_URL}&query=${this.props.query}` : API_URL;
    fetch(photosUrl)
      .then(response => {
        if (!response.ok) {
          this.setState({
            loadingError: true
          })
        }
        return response.json()  //we only get here if there is no error
      })
      .then((data) => {
        this.setState({
          images: data
        });
      });
  }

  componentDidMount() {
    this.fetchImages();
  }

  componentDidUpdate(prevProps) {
    if (this.props.query !== prevProps.query) {
      this.fetchImages(this.props.query);
    }
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
          <GridList cellHeight={180} className={styles.gridList} cols={4}>
            {this.state.images.length && this.state.images.map(image => {
              return (
                <ImageThumbnail key={image.id} {...image} />
              )
            })
            }
          </GridList>
          {!this.state.images.length && 
            (
              <div className={styles.emptyState}>
                <img src={noResults} alt="NO Results Found" />
              </div>
            )}
        </div>
      )

    }
    return (
      <div>

        <Container>
          <Box color="text.primary">
            {imageComponent}
            {/* <Pagination count={10} color="secondary" /> */}
          </Box>
        </Container>
      </div>
    )
  }
}