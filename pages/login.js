import React from 'react';
import Head from 'next/head';
import {AppContainer} from '../src/components/AppContainerComponent';
import {AppInput} from '../src/components/AppInputComponent';
import {AppButton} from '../src/components/AppButtonComponent';
import { useRouter } from 'next/router';

const Login = props => {
	const router = useRouter();
	return (
		<div>
			<Head>
				<title>página de login</title>
			</Head>
			<main>
				<nav>
					<p>Chat de Infoweb</p>
					<button onClick={() => router.back()}>voltar</button>
				</nav>
				<AppContainer>
					<AppInput title="apelido ou email do usuário" label="Usuário:" type="text"/>
					<AppInput label="Senha:" type="password" title="senha do usuário" />
					<AppButton title="Entrar" />
				</AppContainer>
			</main>
		</div>
	);
};

export default Login;