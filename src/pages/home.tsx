import Head from 'next/head';
import { getSession } from 'next-auth/client';
import { GetServerSideProps } from 'next';

import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { Sidebar } from '../components/Sidebar';

import { iHomeProps } from '../interfaces/pages/Home';

import styles from '../styles/Home.module.css';

export default function Home(props: iHomeProps) {
	return (
		<ChallengesProvider 
			level={props.level} 
			currentExperience={props.currentExperience} 
			challengeCompleted={props.challengeCompleted}
			user={props.user}
		>
			<div className={styles.container}>
				<Sidebar/>
				<div className={styles.content}>
					<Head>
						<title>Início | move.it </title>
					</Head>	
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
			user: session.user,
			level: Number(level),
			currentExperience: Number(currentExperience),
			challengeCompleted: Number(challengeCompleted)
		}
	}
}