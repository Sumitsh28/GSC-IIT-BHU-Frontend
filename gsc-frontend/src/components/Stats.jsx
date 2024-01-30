import React, { useEffect, useState } from "react";
import Heart from "/assets/Heart.svg";
import Temple from "/assets/Temple.svg";
import Individual from "/assets/Individual.svg";
import Team from "/assets/Team.svg";
import { useInView } from "react-intersection-observer";
const Stats = () => {
  const a = 20; // Fetch from backend from hook 
  const [core, setCore] = useState(0);
  const [institute, setInstitute] = useState(0);
  const [clubs, setClubs] = useState(0);
  const [events, setEvents] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  useEffect(() => { 
    let r;
    console.log('Hello');
    if(inView && core<a && institute<a && clubs<a && events<a){
      r = setInterval(()=>{
        setCore(c=>c+1);
        setInstitute(i=>i+1);
        setClubs(c=>c+1);
        setEvents(e=>e+1);
      },100)
    }
    return ()=>clearInterval(r);
  }, [clubs,core,institute,events,inView]);
  
  return (
    //For large screens
    <div ref={ref} className="bg-statsbg ">
      <div className="bg-[url('/assets/Group.svg')] bg-no-repeat bg-left-bottom bg-18% ">
        <div className="bg-[url('/assets/STATS.svg')] bg-no-repeat bg-top-4 bg-33%">
          <div className="bg-[url('/assets/DiscusThrower.svg')] bg-no-repeat bg-right-bottom bg-18%">
            <div className="flex justify-evenly pt-32 pb-40">
              <div className="text-center font-inter flex flex-col">
                <img style={{ height: "100px" }} src={Heart} alt="Heart" />
                <div className="text-white font-bold text-3xl pt-6">{core}</div>
                <div className="text-white font-semibold text-2xl pt-2">
                  Core Team Members
                </div>
              </div>
              <div className="text-center flex flex-col">
                <img style={{ height: "100px" }} src={Team} alt="Team" />
                <div className="text-white font-bold text-3xl pt-6">
                  {institute}
                </div>
                <div className="text-white font-semibold text-2xl pt-2">
                  Institute Teams
                </div>
              </div>
              <div className="text-center flex flex-col">
                <img style={{ height: "100px" }} src={Temple} alt="Temple" />

                <div className="text-white font-bold text-3xl pt-6">
                  {clubs}
                </div>
                <div className="text-white font-semibold text-2xl pt-2">
                  Clubs and Societies
                </div>
              </div>
              <div className="text-center flex flex-col">
                <img
                  style={{ height: "100px" }}
                  src={Individual}
                  alt="Individual"
                />
                <div className="text-white font-bold text-3xl pt-6">
                  {events}
                </div>
                <div className="text-white font-semibold text-2xl pt-2">
                  Events
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
