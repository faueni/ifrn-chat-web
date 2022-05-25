import React from "react";
import Head from 'next/head';
import {useRouter} from 'next/router';
import {AppContainer, AppButton, AppInput} from '../src/components';

const Login = props => {
    const router = useRouter();

    return (
        <div>

            <Head>
                <titl>página de login</titl>
            </Head>
            <main>
                <nav>
                    <p>Chat de Infoweb</p>
                    <button onClick={() => router.back()}>voltar</button>
                </nav>
                <AppContainer>

                    <AppInput title="apelido ou email do usuário" label="Usuário" type="text" />

                    <AppInput title="senha do usuário" label="Senha" type="password" />

                    <AppButton value="Entrar" />

                </AppContainer>

            </main>

        </div>


    );
};

export default Login;