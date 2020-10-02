import React from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { GlobalStyle } from './styles/GlobalStyles';
import { ListOfPhotoCards } from './containers/ListOhPhotoCards';
import { Logo } from './components/Logo';
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');
  return (
    <div>
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId}/>
      ) : (
        <>
          <GlobalStyle />
          <ListOfCategories />
          <ListOfPhotoCards categoryId={1} />
        </>
      )}
    </div>
  );
};
