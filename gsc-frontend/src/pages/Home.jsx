import React from 'react'
import HomeAbout from '../components/HomeAbout'
import Stats from '../components/Stats'
import Video from '../components/Video'
import Quotation from '../components/Quotation'
import HeroSection from '../components/HeroSection'

function Home() {
  return (
    
    <div>
        <HeroSection></HeroSection>
        <HomeAbout></HomeAbout>
        <Stats></Stats>
        <Video></Video>
        <Quotation></Quotation>

    </div>
  )
}

export default Home;