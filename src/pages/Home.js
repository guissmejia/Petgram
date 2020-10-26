import React from 'react';
import { ListOfPhotoCards } from '../containers/ListOhPhotoCards';
import { ListOfCategories } from '../components/ListOfCategories';
import { Layout } from '../components/Layout';

const HomePage = ({ categoryId }) => {
  return (
    <>
      <Layout
        title="App de Mascotas"
        subtitle="Con Petgram encontraras fotos de animales hermosos"
      ></Layout>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </>
  );
};

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId;
});
