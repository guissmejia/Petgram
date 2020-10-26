import React, { useContext } from 'react';
import { Context } from '../Context';
import { SubmitButton } from '../components/SubmitButton';
import { Layout } from '../components/Layout'

export const User = () => {
  const { removeAuth } = useContext(Context);

  return (
    <>
    <Layout
        title="Tu Perfil"
        subtitle="Administra tu Perfil"
      ></Layout>
      <SubmitButton onClick={removeAuth}>Cerrar sesion</SubmitButton>
    </>
  );
};
