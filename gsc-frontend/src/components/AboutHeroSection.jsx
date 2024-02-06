import React from 'react'
import Icon from '../assets/AboutHeroIcon.svg'

const AboutHeroSection = () => {
  return (
     <>  
         <div className="bg-[url('/assets/AboutSectionHeroBg.svg')] sm:h-[564px] h-[210px] bg-no-repeat bg-cover bg-center">
          {/* <div className="h-[73vh] bg-[url('/assets/AboutHeroIcon.svg')] lg:bg-[length:1440px_517.33px]  bg-[length:361.52px_148.5px] bg-no-repeat ">  
            <div className='text-white text-[100px] flex items-center justify-center h-[100%]'> 
             <p className='font-lexend'>About</p>
            </div>
          </div> */}
          <div className='relative sm:h-[594px] h-[210px] flex justify-center items-center'>
            <img src={Icon} className='sm:w-[1440px] sm:h-[517.33px] w-[361.52px] h-[148.5px]'></img>
            <p className='text-white text-100px absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-lexend font-bold  text-[40px] sm:text-[68.5px] tracking-tight'>About</p>
          </div>
        </div>
     </>
  )
}

export default AboutHeroSection