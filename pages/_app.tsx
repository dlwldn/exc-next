import type { AppProps } from 'next/app'
import { SampleProvider } from '../components/SampleContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SampleProvider>
      <Component {...pageProps} />
    </SampleProvider>
    
  ) 
  
  
}
export default MyApp
