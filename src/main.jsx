import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyled from './assets/styles/global'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyled />
    <App />
  </React.StrictMode>
)
