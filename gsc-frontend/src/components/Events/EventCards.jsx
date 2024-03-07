import './Events.css'
import EventsInstituteLeague from '../../assets/EventsPage/EventsInstituteLeague.svg'
import EventsInterHostel from '../../assets/EventsPage/EventsInterHostel.svg'
import EventsInterIIT from '../../assets/EventsPage/EventsInterIIT.svg'
import EventsOutfest from '../../assets/EventsPage/EventsOutfest.svg'
import EventsSpardha from '../../assets/EventsPage/EventsSpardha.svg'
import EventsSummerCamp from '../../assets/EventsPage/EventsSummerCamp.svg'
import { Link } from 'react-router-dom'
const images = [EventsInstituteLeague, EventsInterHostel, EventsInterIIT, EventsOutfest, EventsSpardha, EventsSummerCamp]
const HeroEvents = () => {
  return (
     <>  
         <div className="grid grid-cols-2 ss:grid-cols-3 gap-10 m-4 smd:m-6">
            {images.map((image, index) => {
                  return ( 
                    <div className="')]">
                    <Link to='/' >
                    <img className='mx-auto' key={index} src={image} alt="image" />
                    </Link>
                    </div>
) 
            })}
         </div>
     </>
  )
}

export default HeroEvents