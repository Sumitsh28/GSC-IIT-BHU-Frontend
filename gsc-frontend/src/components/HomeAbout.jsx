import React from "react";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <div className=" bg-[url('/assets/QuotationTopleft.svg')]   ss:bg-[url('/assets/HomeAboutQuartercircle.svg')]  bg-no-repeat ss:bg-right-bottom bg-[length:235px]  md:bg-[length:302px]">
    <div className="bg-[url('/assets/HomeAboutCorner.svg')] bg-no-repeat bg-right-bottom bg-[length:235px] md:bg-[length:302px] ">
      <div className="ss:bg-[url('/assets/Batsman.svg')] bg-no-repeat bg-left-bottom sm:bg-left-bottom-3 md:bg-left-bottom-2 bg-[length:200px] ">
        <div className="ss:bg-[url('/assets/Cricketball.svg')] bg-no-repeat bg-right-top  md:bg-right-top-3 bg-[length:250px] ">
            <div className="pt-16 pb-9 pr-6 pl-10 ss:pt-16 ss:pb-36 ss:pl-10 ss:pr-44 md:pl-20 md:pr-80">
              <div className="font-lexend font-bold ss:font-semibold text-center ss:text-left text-2xl xs:text-3xl  md:font-medium md:text-4xl">ABOUT</div>
              <div className="font-lexend pt-10 text-xs xs:text-sm ss:text-md md:pt-12 md:text-lg" >
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est
              </div>
              <div className="font-lexend pt-6 text-xs xs:text-sm ss:text-md ss:pt-4 pb-4 ss:pb-8  md:text-lg">
                aborum et dolorum fuga. Et harum quidem rerum facilis est et
                expedita distinctio. Nam libero tempore, cum soluta nobis est
                eligendi optio cumque nihil impedit quo minus id quod maxime
                placeat facere possimus, omnis voluptas assumenda est, omnis
                dolor repellendus. Temporibus autem quibusdam et aut officiis
                debitis aut rerum
              </div>
            
              <Link to={'/about'}  className="font-inter text-about-red text-md  md:text-lg" >
                Read More...
              </Link>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>

  );
};

export default HomeAbout;
