import '../styles/global.css';

import { Provider } from 'next-auth/client';
import { AuthenticationProvider } from '../contexts/AuthenticationContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthenticationProvider>
      <Provider session={pageProps.session}>
          <Component {...pageProps} />
      </Provider>
    </AuthenticationProvider>
  ) 
}

export default MyApp
