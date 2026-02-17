import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AWARProvider } from './providers/AWARProvider'
import App from './showcase/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AWARProvider>
      <App />
    </AWARProvider>
  </StrictMode>,
)
