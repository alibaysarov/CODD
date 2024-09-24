import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import { theme } from './theme/index.ts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import "./i18n.ts"
import "./index.css"


const client = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
  ,
)
