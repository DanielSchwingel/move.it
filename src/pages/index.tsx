import { useContext } from 'react';
import { AuthenticationContext } from '../contexts/AuthenticationContext';
import { FiArrowRight } from 'react-icons/fi';
import Head from 'next/head';

import styles from '../styles/Index.module.css';

export default function Index() {
	const { logIn } = useContext(AuthenticationContext);

	return (
		<div className={styles.container}>
			<Head>
				<title>move.it</title>
			</Head>
			<img src='./background.svg' alt='Imagem de background'/>
			<section>
				<img src='./logo-full-white.svg' alt='Logo move.it'/>
				<p>Bem-vindo</p>
				<div>
					<img src='./icons/github.svg' alt='Ícone GitHub'/>
					<span>Faça login com seu Github para começar</span>
				</div>
				<div>
					<button type='button' onClick={logIn}>
						Entrar com GitHub
						<FiArrowRight size={24} color='#FFFFFF' />
					</button>
				</div>
			</section>
		</div>
	)
};
