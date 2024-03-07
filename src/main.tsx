import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '../src/assets/js/jquery-3.4.1.min.js'
import '../src/assets/js/bootstrap.js'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
