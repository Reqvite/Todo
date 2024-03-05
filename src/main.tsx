import React from 'react'
import ReactDOM from 'react-dom/client'

import App from '@/app/app'

import { Providers } from './app/Providers'

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
)
