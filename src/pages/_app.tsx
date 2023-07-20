import type { AppProps } from 'next/app'
import '../style/global.scss'
import { Provider } from 'react-redux'
import { setupStore } from '@/store/store'

export default function App({ Component, pageProps }: AppProps) {

  const store = setupStore()
  
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
