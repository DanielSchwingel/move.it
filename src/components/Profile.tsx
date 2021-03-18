import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { AuthenticationContext } from '../contexts/AuthenticationContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
   const { level } = useContext(ChallengesContext);
   const { user } = useContext(AuthenticationContext);
   return (
      <div className={styles.profileContainer}>
         <img src={user.image} alt='Daniel Filipe Schwingel'/>
         <div>
            <strong>{user.name}</strong>
            <p>
               <img src='icons/level.svg' alt='Level'/>
               Level {level}
            </p>
         </div>   
      </div>
   )   
}