import React from "react";
import {AppContainer} from '../src/components/AppContainerComponent';
import {AppInput} from '../src/components/AppInputComponent';

const AppButton = props => (
    <div>
        <input type="submit" value={props.value} />
    </div>
);

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