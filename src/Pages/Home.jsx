import React from 'react'
import Hero from '../components/Hero/Hero'
import Announcements from '../components/Announcements/Announcements'
import Leadership from './Leadership'
import About from './About'
import Gallery from '../components/Gallary/Gallary'
import Chatbot from '../components/Announcements/ChatBot/ChatBot'
import Contact from './Contact'
import Newsletter from '../components/NewsLetter/NewsLetter'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Announcements/>
        <Leadership/>
        <About/>
        <Gallery />
        <Chatbot/>
        <Contact/>
        <Newsletter/>
    </div>
  )
}

export default Home