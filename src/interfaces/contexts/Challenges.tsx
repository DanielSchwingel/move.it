import { ReactNode } from 'react';
import { iUserAuthenticated } from '../others/Authentication';

interface iChallenge {
   type: 'body' | 'eye';
   description: string;
   amount: number;
}

interface iChallengesContextData {
   level: number;
   levelUp: ()=> void;
   currentExperience: number;
   challengeCompleted: number;
   startNewChallenge: ()=> void;
   activeChallenge: iChallenge;
   resetChallenge: ()=> void;
   experienceToNextLevel: number;
   completeChallenge: ()=> void;
   closeLevelUpModal: ()=> void;
   user?: iUserAuthenticated;
}

interface iChallengesProviderProps {
   children: ReactNode;
   level?: number;
	currentExperience?: number;
	challengeCompleted?: number;
   user?: iUserAuthenticated;
}

export type { iChallenge, iChallengesContextData, iChallengesProviderProps };