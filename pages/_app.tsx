import type { AppProps } from 'next/app'
import styles from '../styles/global.module.scss'

export default function MyApp({ Component, pageProps }: AppProps){
  return <Component {...pageProps} />
}
