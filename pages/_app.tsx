import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components'
import { StateContext } from '../context/StateContext'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // In order to use StateContext, you need to wrap your app in a Provider, in this case I made a StateContext component
    // We can now use a consumer in other components to access the state
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
