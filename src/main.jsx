import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CanvasProvider } from './store/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CanvasProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CanvasProvider>,
)
