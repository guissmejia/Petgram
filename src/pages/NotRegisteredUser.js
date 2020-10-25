import React, { useContext } from 'react';
import { Context } from '../Context';
import { UserForm } from '../components/UserForm';
import { RegisterMutation } from '../containers/RegisterMutation';
import { LoginMutation } from '../containers/LoginMutation';

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context);
  return (
    <>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            register({ variables }).then(({ data }) => {
              const { signup } = data;
              //console.log(response)
              activateAuth(signup);
            });
          };

          const errorMsg = error && 'El usuario ya existe';

          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              title="Registrarse"
              onSubmit={onSubmit}
            />
          );
        }}
      </RegisterMutation>
      <LoginMutation>
        {(login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            login({ variables }).then(({ data }) => {
              const { login } = data;
              //console.log(response)
              activateAuth(login);
            });
          };

          const errorMsg = error && 'Inicio de Sesion no valido';

          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              title="Iniciar Sesion"
              onSubmit={onSubmit}
            />
          );
        }}
      </LoginMutation>
    </>
  );
};
