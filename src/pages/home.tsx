import { useEffect, useContext } from 'react';
import Head from 'next/head';
import { getSession } from 'next-auth/client';
import { GetServerSideProps } from 'next';
import axios from 'axios';

import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { AuthenticationContext } from '../contexts/AuthenticationContext';
import { Sidebar } from '../components/Sidebar';

import { iHomeProps } from '../interfaces/pages/Home';

import styles from '../styles/Home.module.css';

export default function Home(props: iHomeProps) {
	const { user } = useContext(AuthenticationContext);
	useEffect(()=> {
		axios.post('/api/insertUser', {name: user.name, email: user.email, image: user.image})
			.then(response=>console.log(response.data))
	},[]);

	return (
		<ChallengesProvider 
			level={props.level} 
			currentExperience={props.currentExperience} 
			challengeCompleted={props.challengeCompleted}
		>
			<div className={styles.container}>
				<Head>
					<title>Início | move.it </title>
				</Head>	
				<Sidebar/>
				<div className={styles.content}>
					<ExperienceBar/>
					<CountdownProvider>
						<section>
							<div>
								<Profile/>
								<CompletedChallenges/>
								<Countdown/>
							</div>
							<div>
								<ChallengeBox/>
							</div>

						</section>
					</CountdownProvider>
				</div>
			</div>
		</ChallengesProvider>
	)
}

export const getServerSideProps:GetServerSideProps  = async (ctx)=> {
	const { level, currentExperience, challengeCompleted } = ctx.req.cookies;
	const session = await getSession(ctx);
	if (!session) {
		return {
			props: {},
			redirect: {
				destination: '/'
			}
		}
	}
	return {
		props: {
			level: Number(level),
			currentExperience: Number(currentExperience),
			challengeCompleted: Number(challengeCompleted)
		}
	}
}