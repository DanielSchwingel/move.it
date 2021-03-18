import { createContext, useState, useEffect } from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';

import { iUserAuthenticated, iAuthenticationContextData, iAuthenticationProviderProps } from '../interfaces/contexts/Authentication';

export const AuthenticationContext = createContext({} as iAuthenticationContextData);

export const AuthenticationProvider = ({ children }: iAuthenticationProviderProps)=> { 
   const [ session, loading ] = useSession();
   const [ user, setUser ] = useState<iUserAuthenticated>();

   useEffect(()=>{
      if (session) {
         setUser({
            name: session.user.name,
            email: session.user.email,
            image: session.user.image
         })
      }
   },[session]);

   async function logIn(){
      await signIn('github', { callbackUrl: 'http://localhost:3000/home' });     
   }

   function logOut(){
      signOut({callbackUrl: 'http://localhost:3000/home'});
   }

   if(loading) {
      return<p>Carregando...</p>
   }
   return (
      <AuthenticationContext.Provider 
         value={{
            logIn,
            logOut,
            user
         }}
      >
         {children}
      </AuthenticationContext.Provider>
   )

};

