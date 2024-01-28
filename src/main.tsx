import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { NavigationContextProvider } from './Contexts/NavigationContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavigationContextProvider>

      <App />
    </NavigationContextProvider>
  </React.StrictMode>,
)
