import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

import { HomePage, TerminalPage } from './pages'

import { store } from './store'
import { Provider } from 'react-redux'

import './index.scss'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='terminal' element={<TerminalPage />}>
            <Route path=':id' element={<TerminalPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
