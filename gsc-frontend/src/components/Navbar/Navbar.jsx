import { useState, useRef, useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import "./Navbar.css";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import instagram from "../../images/instagram.png";

const Navbar = ({ scrolling }) => {
  const closeButton = useRef(null);
  const openButton = useRef(null);
  const location = useLocation();

  const isPageActive = (pathname) => {
    return location.pathname === pathname;
  };

  const [toggle, setToggle] = useState(false);

  const navbarStyle = {
    position: "fixed",
    top: "0",
    width: "100%",
    zIndex: "2",
    backgroundColor: scrolling ? "#430d9b" : "transparent",
    transition: "background-color 0.3s ease-in-out",
  };

  return (
    <>
      <header>
        {/* Desktop Navbar */}
        <div className="sticky top-0 z-50">
          <nav
            className={`smd:block hidden px-4 py-1.5 smd:px-4 font-lexend
          `}
            style={navbarStyle}
          >
            <div className="flex flex-wrap items-center justify-between ml-5">
              <Link to="/" className="items-center ">
                <img
                  src="/assets/gscLogo.png"
                  className="h-[7rem] mr-1"
                  alt="GSC_Logo"
                />
              </Link>
              <div
                className="w-full hidden smd:block smd:w-auto mr-[1rem]"
                id="navbar-default"
              >
                <ul className="flex flex-col mt-4 smd:flex-row smd:space-x-6 smd:mt-0 text-sm smd:bg-transparent">
                  <li className="place-self-center">
                    <Link
                      to="/"
                      className={`navitem ${
                        isPageActive("/") ? "active" : "none"
                      } block py-2 pl-3 pr-4 text-white smd:p-0`}
                    >
                      HOME
                    </Link>
                  </li>
                  <li className="place-self-center">
                    <Link
                      to="/about"
                      className={`navitem ${
                        isPageActive("/about") ? "active" : "none"
                      } block py-2 pl-3 pr-4 text-white
                        smd:p-0`}
                    >
                      ABOUT
                    </Link>
                  </li>
                  <li className="place-self-center">
                    <Link
                      to="/events"
                      className={`navitem ${
                        isPageActive("/events") ? "active" : "none"
                      } block py-2 pl-3 pr-4 text-white
                        smd:p-0`}
                    >
                      EVENTS
                    </Link>
                  </li>
                  <li className="place-self-center">
                    <Link
                      to="/sports"
                      className={`navitem ${
                        isPageActive("/sports") ? "active" : "none"
                      } block py-2 pl-3 pr-4 text-white
                        smd:p-0`}
                    >
                      SPORTS
                    </Link>
                  </li>
                  {/* <li className="place-self-center">
                  <Link
                    to="/clubs"
                    className={`navitem block py-2 pl-3 pr-4 ${
                      isActive("/clubs") ? "text-[#4c4c4c]" : "text-white"
                    }  smd:p-0`}
                  >
                    CLUBS
                  </Link>
                </li> */}
                  <li className="place-self-center">
                    <Link
                      to="/contacts"
                      className={`navitem ${
                        isPageActive("/contacts") ? "active" : "none"
                      } block py-2 pl-3 pr-4 text-white
                       smd:p-0`}
                    >
                      CONTACTS
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="flex flex-col mt-4 smd:flex-row smd:space-x-6 smd:mt-0 smd:font-medium smd:bg-transparent text-xl mr-[4rem]">
                  <li className="place-self-center text-white">
                    <Link
                      to="https://www.instagram.com/games_and_sports_iitbhu/"
                      target="_blank"
                    >
                      <img
                        src={`${instagram}`}
                        className="w-[29px] h-[31px] image-filter"
                      />
                    </Link>
                  </li>
                  <li className="place-self-center text-white hover:text-[#1869FF]">
                    <Link
                      to="https://www.facebook.com/gamesandsportscouncilIITBHU/"
                      target="_blank"
                    >
                      <FaFacebook />
                    </Link>
                  </li>
                  <li className="place-self-center text-white hover:text-[#0065C7]">
                    <Link
                      to="https://www.linkedin.com/company/games-and-sports-council-iit-bhu-varanasi/mycompany/"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </Link>
                  </li>
                  <li className="place-self-center text-white hover:text-[#FF0002]">
                    <Link
                      to="https://www.youtube.com/watch?v=5rVw16UHLNw&ab_channel=Film%26MediaCouncil%2CIIT%28BHU%29Varanasi"
                      target="_blank"
                    >
                      <FaYoutube />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        {/* Mobile Navbar */}
        <div className="sticky top-0 z-50">
          <nav
            className={`smd:hidden bg-[#430D9B] px-2 smd:px-4 py-2.5 font-lexend relative 
          `}
            style={navbarStyle}
          >
            <div className="container flex flex-wrap items-center justify-between mx-auto">
              <Link to="/" className="items-center">
                <img
                  src="/assets/gscLogo.png"
                  className="h-12 mr-3 smd:h-10"
                  alt="GSC_logo"
                />
              </Link>
              {/* <!-- drawer init and show --> */}
              {/* {!toggle ? ( */}
              <div
                className="text-center"
                onClick={() => {
                  setToggle(true);
                }}
              >
                <button
                  ref={openButton}
                  className="text-white bg-transparent focus:ring-4 focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
                  type="button"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              {/* ) : null} */}

              {/* <!-- drawer component --> */}

              {toggle ? (
                <div
                  id="drawer-right-example"
                  className="fixed top-0 right-0 z-40 w-64 h-[110vh] p-4  overflow-y-auto transition-transform bg-white"
                >
                  <button
                    ref={closeButton}
                    onClick={() => {
                      setToggle(false);
                    }}
                    type="button"
                    className="text-black rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close menu</span>
                  </button>
                  <div className="py-4 overflow-y-auto">
                    <ul className="space-y-6 text-center">
                      <li className="mt-8">
                        <Link
                          onClick={() => closeButton.current.click()}
                          to="/"
                          className="items-center p-2 text-base font-semibold text-black rounded-lg"
                        >
                          <span className="whitespace-nowrap">HOME</span>
                        </Link>
                        <hr className="mt-3 h-px bg-black border-0 mx-3"></hr>
                      </li>
                      <li className="mt-8">
                        <Link
                          onClick={() => closeButton.current.click()}
                          to="/about"
                          className="items-center p-2 text-base font-semibold text-black rounded-lg"
                        >
                          <span className="whitespace-nowrap">ABOUT</span>
                        </Link>
                        <hr className="mt-3 h-px bg-black border-0 mx-3"></hr>
                      </li>
                      <li>
                        <Link
                          onClick={() => closeButton.current.click()}
                          to="/events"
                          className="items-center p-2 text-base font-semibold text-black rounded-lg"
                        >
                          <span className="whitespace-nowrap">EVENTS</span>
                        </Link>
                        <hr className="mt-3 h-px bg-black border-0 mx-3"></hr>
                      </li>
                      <li>
                        <Link
                          onClick={() => closeButton.current.click()}
                          to="/teams"
                          className="items-center p-2 text-base font-semibold text-black rounded-lg"
                        >
                          <span className="whitespace-nowrap">TEAMS</span>
                        </Link>
                        <hr className="mt-3 h-px bg-black border-0 mx-3"></hr>
                      </li>
                      <li>
                        <Link
                          onClick={() => closeButton.current.click()}
                          to="/clubs"
                          className="items-center p-2 text-base font-semibold text-black rounded-lg"
                        >
                          <span className="whitespace-nowrap">CLUBS</span>
                        </Link>
                        <hr className="mt-3 h-px bg-black border-0 mx-3"></hr>
                      </li>
                      <li>
                        <Link
                          onClick={() => closeButton.current.click()}
                          to="/contacts"
                          className="items-center p-2 text-base font-semibold text-black rounded-lg"
                        >
                          <span className="whitespace-nowrap">CONTACTS</span>
                        </Link>
                        <hr className="mt-3 h-px bg-black border-0 mx-3"></hr>
                      </li>
                    </ul>
                    <ul className="flex flex-row gap-7 text-xl mt-6 ml-7">
                      <li className="place-self-center text-black">
                        <FaInstagram />
                      </li>
                      <li className="place-self-center text-black">
                        <FaFacebook />
                      </li>
                      <li className="place-self-center text-black">
                        <FaLinkedin />
                      </li>
                      <li className="place-self-center text-black">
                        <FaYoutube />
                      </li>
                    </ul>
                    <hr className="mt-3 h-px bg-black border-0 mx-3"></hr>
                  </div>
                </div>
              ) : null}
            </div>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
