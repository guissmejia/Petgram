import React, { useEffect, useRef, useState } from 'react';
import { ImgWrapper, Img, Button, Article } from './styles';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const element = useRef(null);
  const [show, setShow] = useState(false);
  const key = `like-${id}`
  const [liked, setLiked] = useState(() => {
    try{
      const like = localStorage.getItem(key)
      return like
    } catch(e){
      return false
    }
  });

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(element.current);
    });
  }, [element]);

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  const setLocalStorage = value => {
    try {
      localStorage.setItem(key, value)
      setLiked(value)
    } catch(e){
      console.error(e)
    }
  }

  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button onClick={() => setLocalStorage(!liked)}>
            <Icon size="32px" /> {likes} likes!
          </Button>
        </>
      )}
    </Article>
  );
};
