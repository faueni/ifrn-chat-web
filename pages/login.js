import React from "react";
import {AppContainer, AppButton, AppInput} from '../src/components';

const Login = props => {
    return (
        <AppContainer>

            <AppInput title="apelido ou email do usuário" label="Usuário" type="text" />


            <AppInput title="senha do usuário" label="Senha" type="password" />

            <AppButton value="Entrar" />

        </AppContainer>

    );
};

export default Login;