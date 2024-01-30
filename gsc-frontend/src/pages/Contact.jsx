import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";

function Contact() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !scrolling) {
        setScrolling(true);
      } else if (window.scrollY === 0 && scrolling) {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);

  return (
    <>
      <Navbar scrolling={scrolling} />
      <div>Contact</div>
    </>
  );
}

export default Contact;
