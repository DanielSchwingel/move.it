import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/client';
import { FiHome, FiAward, FiPower } from 'react-icons/fi';

import styles from '../styles/components/Sidebar.module.css';

export function Sidebar() {
   const router = useRouter();

   function handleLogout() {
      signOut();
      router.push('/home');
   }
   return (
      <aside className={styles.container}>
         <header>
            <img src='./logo.svg' alt='Logo move.it' />
         </header>
         <main>
            <Link href='/home'>
               <FiHome size={24} color='#666666'/>
            </Link>
            <Link href='/ranking'>
               <FiAward size={24} color='#666666'/>
            </Link>
         </main>
         <footer>
            <FiPower size={24} color='#666666' onClick={handleLogout}/>
         </footer>
      </aside>
   )
};