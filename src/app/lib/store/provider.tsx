import { AppProps } from 'next/app'; // Import the AppProps type from Next.js
import { wrapper } from '.';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
