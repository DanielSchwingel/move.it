import { ReactNode } from 'react';

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
}

interface iChallengesProviderProps {
   children: ReactNode;
   level?: number;
	currentExperience?: number;
	challengeCompleted?: number;
}

export type { iChallenge, iChallengesContextData, iChallengesProviderProps };