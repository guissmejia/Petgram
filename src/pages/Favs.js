import React from 'react';
import { FavsWithQuery } from '../containers/GetFavorites';
import { Layout } from '../components/Layout';

export default () => (
  <>
    <Layout
      title="Tus favoritos"
      subtitle="Aqui encontraras tus favoritos"
    ></Layout>
    <FavsWithQuery />
  </>
);
