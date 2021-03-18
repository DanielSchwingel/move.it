import { iUserAuthenticated } from '../others/Authentication';

interface iHomeProps {
	level: number;
	currentExperience: number;
	challengeCompleted: number;
	user: iUserAuthenticated
}

export type { iHomeProps };