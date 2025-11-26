import React from 'react'
import Hero from '../components/Hero/Hero'
import Announcements from '../components/Announcements/Announcements'
import Leadership from './Leadership'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Announcements/>
        <Leadership/>
    </div>
  )
}

export default Home