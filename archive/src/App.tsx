import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ContentsProvider } from './contexts/bbsContentsContext'
import logo from './logo.svg'
import './App.css'

const Top = lazy(async () => import('./pages/Top'))
const News = lazy(async () => import('./pages/News'))
const Gallery = lazy(async () => import('./pages/Gallery'))
const Bbs = lazy(async () => import('./pages/Bbs'))

function App() {
  return (
    <ContentsProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<>Loading...</>}>
                <Top />
              </Suspense>
            }
          />
          <Route
            path="/news"
            element={
              <Suspense fallback={<>Loading...</>}>
                <News />
              </Suspense>
            }
          />
          <Route
            path="/gallery"
            element={
              <Suspense fallback={<>Loading...</>}>
                <Gallery />
              </Suspense>
            }
          />
          <Route
            path="/bbs"
            element={
              <Suspense fallback={<>Loading...</>}>
                <Bbs />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </ContentsProvider>
  )
}

export default App
