import React, { Suspense } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import TopBar from './components/Header/TopBar'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Syllabus from './Pages/Syllabus'
import Faculty from './Pages/Faculty'
import Admission from './Pages/Addmission'

const App = () => {
  return (
    <Suspense>

        <div className="fixed top-0 left-0 right-0 z-50">
        <TopBar />
        <Header />
      </div>
      <Routes>
        <Route path='/'  element={<Home/>}/>
         <Route path='/content/syllabus'  element={<Syllabus/>}/>
          <Route path='/faculty'  element={<Faculty/>}/>
          <Route path='/admisson'  element={<Admission/>}/>
      </Routes>
      <Footer/>
    </Suspense>
  )
}

export default App