import Head from 'next/head';

import { Sidebar } from '../components/Sidebar';

import styles from '../styles/Ranking.module.css'

export default function Ranking() {
   return (
      <div className={styles.container}>
         <Head>
            <title>Ranking | move.it</title>
         </Head>
         <Sidebar/>
         <div className={styles.content}>
            <main>
               <h1>Leaderboard</h1>
            </main>
         </div>
      </div>
   )
}