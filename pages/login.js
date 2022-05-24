import React from "react";
import {AppContainer} from '../src/components/AppContainerComponent';
import {AppInput} from '../src/components/AppInputComponent';
import {AppButton} from '../src/components/AppButtonComponent';

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