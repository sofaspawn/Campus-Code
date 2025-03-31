import { Link } from "react-router-dom";
import React from "react";
import Ellipse1 from "./assets/Ellipse-1.png";
import Ellipse2 from "./assets/Ellipse-2.png";
import Ellipse3 from "./assets/Ellipse-3.png";
import Footer from "./footer"
import Star from "./assets/Vector.png"

function App() {
  return (
    <div className="bg-[#1E1B1B] min-h-screen w-screen text-[#ECE6C2] flex flex-col items-center justify-center relative px-4 sm:px-8">
      <h1
        className="text-5xl sm:text-7xl md:text-[105px] mb-5 font-bold tracking-[0.06em]"
        style={{ fontFamily: "Chonburi" }}
      >
        campus c - de
      </h1>
      <img src={Ellipse1} 
      className="absolute top-0 left-0 "/>

      <img src={Ellipse2}
      className="absolute top-0 left-0" />

      <img src={Ellipse3}
      className="absolute right-0 bottom-10"/>

      <img src={Star}
      className="absolute right-140 top-67"/>

      <div
        className="flex gap-15 z-1000 mb-20 text-[30px] font-semibold tracking-[0.07em]"
        style={{ fontFamily: "CENTAUR" }}
      >
        <Link to="/2player" className="bg-[#73BDA8] px-15 py-7 rounded-[40px]">
          2 Player
        </Link>
        <Link to="/3player" className="bg-[#CC6B49] px-15 py-7 rounded-[40px]">
          3 Player
        </Link>
        <Link to="/4player" className="bg-[#D2A24C] px-15 py-7 rounded-[40px]">
          4 Player
        </Link>
      </div>
      <Footer  />
    </div>
  );
}

export default App;
