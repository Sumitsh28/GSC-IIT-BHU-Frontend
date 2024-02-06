import React from "react";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <div className="bg-[url('/assets/HomeAboutQuartercircle.svg')] bg-no-repeat bg-right-bottom bg-[length:250px]  md:bg-[length:302px]">
    <div className="bg-[url('/assets/HomeAboutCorner.svg')] bg-no-repeat bg-right-bottom bg-[length:250px] md:bg-[length:302px] ">
      <div className="bg-[url('/assets/Batsman.svg')] bg-no-repeat bg-left-bottom sm:bg-left-bottom-3 md:bg-left-bottom-2 bg-[length:200px] ">
        <div className="bg-[url('/assets/Cricketball.svg')] bg-no-repeat bg-right-top  md:bg-right-top-3 bg-[length:250px] ">
      
            <div className="pt-16 pb-36 pl-10 pr-44 md:pl-20 md:pr-80">
              <div className="font-lexend  font-semibold text-3xl  md:font-semibold md:text-4xl">ABOUT</div>
              <div className="font-lexend  pt-10 text-md md:pt-12 md:font-normal md:text-lg" >
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est
              </div>
              <div className="font-lexend  text-md pt-4  md:font-normal md:text-lg">
                aborum et dolorum fuga. Et harum quidem rerum facilis est et
                expedita distinctio. Nam libero tempore, cum soluta nobis est
                eligendi optio cumque nihil impedit quo minus id quod maxime
                placeat facere possimus, omnis voluptas assumenda est, omnis
                dolor repellendus. Temporibus autem quibusdam et aut officiis
                debitis aut rerum
              </div>
              <Link to={'/about'} className="font-inter text-about-red pt-8">Read More ..</Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default HomeAbout;
