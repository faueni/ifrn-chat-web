import React from "react";

const AppContainer = props => <div>{props.children}</div>;
const AppInput = props => (
    <div>
        <label>{props.label}</label>
        <input type={props.type} title={props.title} />
    </div>
);
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