import styles from '../styles/Index.module.css';

export default function Index() {
	return (
		<div className={styles.container}>
			<img src='./background.svg' alt='Imagem de background'/>
			<section>
				<img src='./logo-full-white.svg' alt='Logo move.it'/>
				<p>Bem-vindo</p>
				<div>
					<img src='./icons/github.svg' alt='Ícone GitHub'/>
					<span>Faça login com seu Github para começar</span>
				</div>
			</section>
		</div>
	)
};
