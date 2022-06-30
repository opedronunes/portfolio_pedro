import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from 'react-query'
import App from './App'
import GlobalStyled from './assets/styles/global'
import { queryClient } from './services/queryClient'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyled />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
)
