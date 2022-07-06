import React, { useState } from "react";
import Head from 'next/head';
import {useRouter} from 'next/router';
import {AppContainer, AppButton, AppInput} from '../src/components';
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import HomeIcon from "@mui/icons-material/Home";

const Login = props => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    const login = (name, pass) => {
        router.push({
           pathname: "/",
           query: { user: name, hash: "123" },
        });
    };
  

    return (
        <div>

            <Head>
                <titl>Infoweb chat - Login</titl>
            </Head>
            <main>
                <AppContainer>

                    <AppInput 
                        title="apelido ou email do usuário" 
                        label="Usuário" 
                        value={name}
                        onChange={handleChangeName}
                    />

                    <AppInput 
                        label="Senha" 
                        type="password" 
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />

                    <AppButton 
                        onClick={event => router.back()}
                        label="voltar"
                        color="secondary"
                        startIcon={<HomeIcon />}
                    />
                    <AppButton 
                        title="Clique aqui para entrar no chat"
                        label="Entrar no chat"
                        variant='contained'
                        disabled={!(!!name && !!password)}
                        endIcon={<FingerprintIcon />}
                        onClick={(e) => login(name, password)}
                    />

                </AppContainer>

            </main>

        </div>


    );
};

export default Login;