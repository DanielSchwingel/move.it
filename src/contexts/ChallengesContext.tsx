import { createContext, useEffect, useState } from 'react';
import Cookies  from 'js-cookie';

import { LevelUpModal } from '../components/LevelUpModal';

import { iChallengesContextData, iChallengesProviderProps} from '../interfaces/contexts/Challenges';
import { iUserAuthenticated } from '../interfaces/others/Authentication';

import challenges from '../../challenges.json';

export const ChallengesContext = createContext({} as iChallengesContextData);

export function ChallengesProvider({children, ...rest}: iChallengesProviderProps) {
   const [ level, setLevel ] = useState(rest.level ?? 1);
   const [ currentExperience, setCurrentExperience ] = useState(rest.currentExperience ?? 0);
   const [ challengeCompleted, setChallengeCompleted ] = useState(rest.challengeCompleted ?? 0);
   const [ activeChallenge, setActiveChallenge ] = useState(null); 
   const [ isLevelUpModalOpen, setIsLevelUpModalOpen ] = useState(false);

   const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

   const user: iUserAuthenticated = {
      email: rest.user.email,
      name: rest.user.name,
      image: rest.user.image
   }

   useEffect(()=>{
      Notification.requestPermission();
   },[]);

   useEffect(()=>{
      Cookies.set('level', String(level));
      Cookies.set('currentExperience', String(currentExperience));
      Cookies.set('challengeCompleted', String(challengeCompleted));
   }, [level, currentExperience, challengeCompleted]);

   function levelUp(){
      setLevel(level+1);
      setIsLevelUpModalOpen(true);
   }

   function closeLevelUpModal(){
      setIsLevelUpModalOpen(false);
   }

   function startNewChallenge(){
      const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
      const challenge = challenges[randomChallengeIndex];

      setActiveChallenge(challenge);

      new Audio('./notification.mp3').play();

      if (Notification.permission === 'granted') {
         new Notification('Novo desafio 🎉', {
            body: `Valendo ${challenge.amount} xp!`
         })
      }
   }

   function resetChallenge(){
      setActiveChallenge(null);
   }

   function completeChallenge(){
      if (!activeChallenge) {
         return;
      }

      const { amount } = activeChallenge;
      let finalExperience = currentExperience + amount;
      if (finalExperience > experienceToNextLevel) {
         finalExperience = finalExperience - experienceToNextLevel;
         levelUp();
      }

      setCurrentExperience(finalExperience);
      setActiveChallenge(null);
      setChallengeCompleted(challengeCompleted + 1);
   }

   return (
      <ChallengesContext.Provider
         value={{ 
            level, 
            levelUp, 
            currentExperience, 
            challengeCompleted,
            startNewChallenge,
            activeChallenge,
            resetChallenge,
            experienceToNextLevel,
            completeChallenge,
            closeLevelUpModal,
            user
         }}
      >
         {children}
         { isLevelUpModalOpen && <LevelUpModal/>}
      </ChallengesContext.Provider>
   )
}