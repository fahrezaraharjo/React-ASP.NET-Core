import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@progress/kendo-theme-default/dist/all.css';
import App from './App'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import './assets/css/tailwind-all.css'
import './assets/css/tailwind-base.css'
import './assets/css/tailwind-components.css'
import './assets/css/tailwind-utilities.css'

const client = new QueryClient()

const container = document.getElementById('root')

if (!container) {
    throw new Error('Root container not found')
}

createRoot(container).render(
  <StrictMode>
      <QueryClientProvider client={client}>
        <App />
          <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
  </StrictMode>,
)
