import { useEffect } from 'react';
import '../styles/globals.scss';

export default function App({ Component, pageProps }: any) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js');
      });
    }
  }, []);

  return <Component {...pageProps} />;
}
