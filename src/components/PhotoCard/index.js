import React from 'react';
import { ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder } from "react-icons/md";

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE}) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} />
        </ImgWrapper>
      </a>

      <Button>
        <MdFavoriteBorder size='32px'/> {likes} likes!
      </Button>
    </article>
  );
};
