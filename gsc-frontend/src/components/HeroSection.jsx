import React from 'react'
import Carousel from './Carousel'
import {Link} from 'react-router-dom'
import Contact from '../pages/Contact'
import PatternOrg from '../assets/HeroSectionOrgPattern.svg'
import PatternBlue from '../assets/HeroSectionBluePattern.png'
import PatternQtr from '../assets/HeroSectionQuaterPattern.png'
import Vector from '../assets/Vector.png'

const HeroSection = () => {
    const items = [
        <img key="1" src="/assets/CarouselImage/IITBHUImage.svg" alt="Image 1" />,
        <img key="2" src="/assets/CarouselImage/IITBHUImage.svg" alt="Image 2" />,
        <img key="3" src="/assets/CarouselImage/IITBHUImage.svg" alt="Image 3" />,
  
      ];

      
  return (
//    <div className='bg-[#430D9B]'>
//    <div className="  sm:bg-[url('/assets/HeroSectionQuaterPattern.png')] bg-no-repeat bg-left-bottom w-[100%] lg:bg-[length:150px_150px] md:bg-[length:100px_100px] sm:bg-[length:80px_80px] bg-[length:0px_0px]">
//    <div className=" sm:bg-[url('/assets/HeroSectionOrgPattern.svg')] bg-no-repeat bg-right-top w-[100%] lg:bg-[length:250px_250px] md:bg-[length:200px_200px] sm:bg-[length:180px_180px] bg-[length:0px_0px]">
//    <div className=" sm:bg-[url('/assets/HeroSectionBluePattern.svg')] bg-no-repeat lg:bg-right-bottom-lg md:bg-right-bottom-md sm:bg-right-bottom-sm lg:bg-[length:300px_300px] md:bg-[length:250px_250px] sm:bg-[length:200px_200px] bg-[length:0px_0px] ">
//         <div className='flex sm:flex-row flex-col-reverse lg:h-[73vh] md:h-[65vh] sm:h-[50vh] mx-[20px]'>
        // <div className='flex flex-col w-[100%] sm:w-[50%] items-start mx-[30px] sm:items-center justify-center'>
        // <div className='flex flex-col items-start justify-center font-lexend my-[30px] ml-[20px]'>
        //     <p className='text-[20px] lg:text-[50.5px] md:text-[40.5px] sm:text-[25.5px]  text-white font-bold font-lexend tracking-tight'>GAMES & SPORTS</p>
        //     <p className='text-[20px] lg:text-[50.5px] md:text-[40.5px] sm:text-[25.5px]  text-white font-bold font-lexend tracking-tight'>COUNCIL</p>
        //     <p className='text-[20px] lg:text-[40.5px] md:text-[30.5px] sm:text-[20.5px]  text-white font-bold font-lexend tracking-tight'>IIT (BHU) VARANASI</p>
        //     <div className='flex items-start w-[50%] mt-[20px] '>
        //    <Link to="/contacts" element={<Contact></Contact>}>
        //    <button className='bg-[#D71C1B] text-white lg:text-[20px] md:text-[17px] sm:text-[15px] px-[15px] font-lexend py-[5px]'>
        //       Contact
        //    </button>
        //    </Link>
        // </div>
        // </div>
        
//         </div>

        // <div className='w-[50%]   flex justify-center items-center relative'>
        // <div className='w-[50%]  absolute top-0 z-[1]'><Carousel items={items} />
            
        // </div>
        // {/* <img src={PatternBlue} className='absolute bottom-0 left-0]'></img> */}
        // </div>

//     </div>
//    </div> 
//    </div>
//    </div>
//    </div>
    
//    <div className='bg-[#430D9B] lg:h-[70vh] md:h-[60vh] h-[55vh] flex w-[100%] relative'>
//        <div className='w-[50%] relative flex'>
//              <img src={PatternQtr} className='absolute bottom-0 left-0 w-[130px] h-[130px]'></img>
            //  <div className='flex flex-col w-[100%]  items-start mx-[30px] sm:items-center sm:justify-center '>
            //  <div className='flex flex-col items-start justify-center font-lexend my-[30px] ml-[20px]'>
            //        <p className='text-[20px] lg:text-[45px] md:text-[40.5px] sm:text-[25.5px]  text-white font-bold font-lexend tracking-tight'>GAMES & SPORTS</p>
            //        <p className='text-[20px] lg:text-[45px] md:text-[40.5px] sm:text-[25.5px]  text-white font-bold font-lexend tracking-tight'>COUNCIL</p>
            //        <p className='text-[20px] lg:text-[40.5px] md:text-[30.5px] sm:text-[20.5px]  text-white font-bold font-lexend tracking-tight'>IIT (BHU) VARANASI</p>
            //     <div className='flex items-start w-[50%] mt-[20px] '>
            //         <Link to="/contacts" element={<Contact></Contact>}>
            //         <button className='bg-[#D71C1B] text-white lg:text-[20px] md:text-[17px] sm:text-[15px] px-[15px] font-lexend py-[5px]'>
            //             Contact
            //         </button>
            //         </Link>
            //     </div>
            //  </div>
             
//             </div>
//        </div>
//        <div className='w-[50%] relative'>
            
//              <img src={PatternOrg} className="absolute right-0 top-0 w-[274px] h-[291px]"></img>
//              <div className='w-[100%] flex justify-center items-center relative'>
//                 <div className='max-w-[400px] max-h-[550px]  absolute top-0 z-[1]'><Carousel items={items} /> </div>
//              </div>
//              <img src={PatternBlue} className='absolute bottom-0 left-0 w-[240px] h-[206px]'></img>
//        </div>
       
//    </div>

        <div className='h-[530px] lg:h-[640px] md:h-[500px] sm:h-[350px] bg-[#430D9B] flex flex-row  justify-center sm:gap-[50px] relative z-[-2]'> 
               <div className='hidden sm:flex flex-col mt-[50px]  items-start   '>
                  <div className='flex flex-col items-start justify-center font-lexend my-[30px] '>
                   <p className=' lg:text-[50px] md:text-[40.5px] sm:text-[25.5px]  text-white font-bold font-lexend tracking-tight'>GAMES & SPORTS</p>
                   <p className=' lg:text-[50px] md:text-[40.5px] sm:text-[25.5px]  text-white font-bold font-lexend tracking-tight'>COUNCIL</p>
                   <p className=' lg:text-[40.5px] md:text-[30.5px] sm:text-[20.5px]  text-white font-bold font-lexend tracking-tight'>IIT (BHU) VARANASI</p>
                  <div className='flex items-start w-[50%] mt-[20px] '>
                     <Link to="/contacts" element={<Contact></Contact>}>
                      <button className='bg-[#D71C1B] text-white lg:text-[20px] md:text-[17px] sm:text-[15px] px-[15px] font-lexend py-[5px]'>
                        Contact
                      </button>
                     </Link>
                  </div>
                  </div>
                </div>
                <div className='flex flex-col'>
                <div className='sm:hidden flex flex-col justify-center relative h-[200px]'>
                     <img src={Vector} className=' w-[306px] h-[230px]  z-[-1]'></img>
                     <p className='w-[100%] pl-[23px] pb-[20px] z-[1] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-[15.5px]  text-white font-bold font-lexend tracking-tight'>GAMES & SPORTS COUNCIL</p>
                     <p className='w-[100%] pl-[43px] z-[1] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-7/8  text-[15.5px]  text-white font-bold font-lexend tracking-tight'>IIT (BHU) VARANASI</p>
                     <div className='flex w-[100%] justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[-50px]'>
                     <Link to="/contacts" element={<Contact></Contact>}>
                      <button className='bg-[#D71C1B] text-white text-[12px] px-[5px] font-lexend py-[5px]'>
                        Contact
                      </button>
                     </Link>
                     </div>
                    
                </div>
                <div className='sm:w-[0px] w-[290px] pl-[5px] lg:h-[345px] relative'><Carousel items={items} /></div>
                     
                   
                </div>

                <div className='  md:w-[420px] md:h-[650px]  sm:w-[300px] sm:h-[450px] lg:w-[528px] lg:h-[676px] relative'><Carousel items={items} />
                <img src={PatternBlue} className='hidden sm:flex absolute lg:bottom-6 md:bottom-[140px] sm:bottom-[95px] lg:left-[-200px] md:left-[-150px] sm:left-[-90px] z-[-1] lg:w-[350px] lg:h-[290px] md:w-[250px] md:h-[190px] sm:w-[150px] sm:h-[120px]'></img>
                </div>
                <img src={PatternQtr} className='hidden sm:flex absolute bottom-0 left-0 lg:w-[178px] lg:h-[176px] md:w-[120px] md:h-[118px] sm:w-[90px] sm:h-[88px]'></img>  
                <img src={PatternOrg} className='hidden sm:flex absolute top-0 right-0 z-[-1] lg:w-[374px] lg:h-[390px] md:w-[274px] md:h-[290px] sm:w-[200px] sm:h-[220px]'></img> 
        </div>
  )
}

export default HeroSection