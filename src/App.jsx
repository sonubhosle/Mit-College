import React, { Suspense } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import TopBar from './components/Header/TopBar'
import Header from './components/Header/Header'

const App = () => {
  return (
    <Suspense>
        <div className="fixed top-0 left-0 right-0 z-50">
        <TopBar />
        <Header />
      </div>
      <Routes>
        <Route path='/'  element={<Home/>}/>
      </Routes>
    </Suspense>
  )
}

export default App