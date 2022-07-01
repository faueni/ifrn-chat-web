import React from "react";
import Head from 'next/head';
import {useRouter} from 'next/router';
import {AppContainer, AppButton, AppInput} from '../src/components';

const Login = props => {
    const router = useRouter();

    return (
        <div>

            <Head>
                <titl>Infoweb chat - Login</titl>
            </Head>
            <main>
                <AppContainer>

                    <AppInput title="apelido ou email do usuário" label="Usuário" type="text" />

                    <AppInput title="senha do usuário" label="Senha" type="password" />

                    <AppButton 
                        onClick={event => router.back}
                        label="voltar"
                        color="secondary"
                    />
                    <AppButton 
                        title="Clique aqui para entrar no chat"
                        label="Entrar no chat"
                    />

                </AppContainer>

            </main>

        </div>


    );
};

export default Login;