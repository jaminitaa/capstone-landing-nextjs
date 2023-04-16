import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps, router }) {
  // return <Component {...pageProps} />
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Component {...pageProps} key={router.asPath} />
    </AnimatePresence>
  );
}
