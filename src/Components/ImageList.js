import React from 'react';
import './ImageList.scss';
import ImageCard from './ImageCard';

const ImageList = (props) => {
  const images = props.images.map((image) => (
    <ImageCard key={image.id} image={image} />
  ));
  return <div className='image-list-container'>{images}</div>;
};

export default ImageList;
