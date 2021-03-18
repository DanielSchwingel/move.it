import { ReactNode } from 'react';

interface iUserAuthenticated {
   name: string;
   email: string;
   image: string;
}

interface iAuthenticationContextData {
   logIn: ()=> void;
   logOut: ()=> void;
   user: iUserAuthenticated;
}

interface iAuthenticationProviderProps {
   children: ReactNode;
} 

export type { iAuthenticationContextData, iAuthenticationProviderProps, iUserAuthenticated };