import React, { useEffect, useState } from "react";
import Heart from "/assets/Heart.svg";
import Temple from "/assets/Temple.svg";
import Individual from "/assets/Individual.svg";
import Team from "/assets/Team.svg";
const Stats = () => {
  const [core, setCore] = useState(0);
  const [institute, setInstitute] = useState(0);
  const [clubs, setClubs] = useState(0);
  const [events, setEvents] = useState(0);
  let timer = 0;
  useEffect(() => {
    clearInterval(timer);
    if (core > 12 && clubs > 12 && events > 30 && institute > 13) return;

    timer = setInterval(() => {
      if (core <= 12) setCore(core + 1);
      if (institute <= 13) setInstitute(institute + 1);
      if (clubs <= 12) setClubs(clubs + 1);
      if (events <= 30) setEvents(events + 1);
    }, 10);
    return () => clearInterval(timer);
  }, [core, institute, clubs, events]);

  return (
    //For large screens
    <div className="bg-statsbg ">
      <div className="bg-[url('/assets/Group.svg')] bg-no-repeat bg-left-bottom bg-18% ">
        <div className="bg-[url('/assets/STATS.svg')] bg-no-repeat bg-top-4 bg-33%">
          <div className="bg-[url('/assets/DiscusThrower.svg')] bg-no-repeat bg-right-bottom bg-18%">
            <div className="flex justify-evenly pt-32 pb-40">
              <div className="text-center flex flex-col">
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
