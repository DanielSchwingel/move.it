import { useContext } from 'react';
import Link from 'next/link';
import { AuthenticationContext } from '../contexts/AuthenticationContext';
import { FiHome, FiAward, FiPower } from 'react-icons/fi';

import styles from '../styles/components/Sidebar.module.css';

export function Sidebar() {
   const { logOut } = useContext(AuthenticationContext);

   return (
      <aside className={styles.container}>
         <header>
            <img src='./logo.svg' alt='Logo move.it' />
         </header>
         <main>
            <Link href='/home'>
               <a>
               <FiHome size={24} color='#666666'/>
               </a>
            </Link>
            <Link href='/ranking'>
               <a>
               <FiAward size={24} color='#666666'/>
               </a>
            </Link>
         </main>
         <footer>
            <FiPower size={24} color='#666666' onClick={logOut}/>
         </footer>
      </aside>
   )
};