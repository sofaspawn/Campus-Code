import React, { useState } from "react";
import Quiz from "./components/mainPrompt";
import Mess from "./assets/Vector-3.png"
import Footer from "./footer"
import burstWhite from "./assets/Burst-pucker-3.png"
import burstBlue from "./assets/Burst-pucker-4.png"
import burstYellow from "./assets/Burst-pucker-5.png"


function ThreeNameInput() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [players, setPlayers] = useState([
    { name: "", color: "#ECE6CE" }, // off white
    { name: "", color: "#73BDA8" }, // blue
    { name: "", color: "#D2A24C" }, // yellow
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsGameStarted(true);
  };

  if (isGameStarted) {
    return <Quiz players={players} />;
  }

  return (
    <div className=" flex items-center text-[#ECE6C2] justify-center min-h-screen bg-[#1E1B1B]">
      <div>
        <h2 className="text-[80px] font-medium text-center absolute inset-x-0 top-20 h-20 text-[#CC6B4A]" style={{fontFamily:'Adamina-Regular'}}>
          Player Setup
        </h2>

        <img src={Mess} 
        className="absolute inset-0"/>

        <img src={burstWhite} 
        className="absolute top-67 left-132 w-20"/>

        <img src={burstBlue} 
        className="absolute top-88 left-132 w-20"/>

        <img src={burstYellow} 
        className="absolute top-108 left-132 w-20"/>
        

        

        <form onSubmit={handleSubmit} className="absolute top-70 left-140 space-y-8" style={{fontFamily:'CENTAUR'}}>
          {players.map((player, index) => (
            <div key={index} className=" flex items-center space-x-11 tracking-[0.3em] text-[20px]">
              <div
                className="w-4 h-4 rounded-full flex-shrink-0"
                style={{ backgroundColor: player.color }}
              />
              <input
                type="text"
                value={player.name}
                onChange={(e) => {
                  const newPlayers = [...players];
                  newPlayers[index].name = e.target.value;
                  setPlayers(newPlayers);
                }}
                placeholder={`Player ${index + 1}`}
                required
                className="w-full px-40 py-2 rounded-[40px] border-2 focus:border-[#ECE6C2] focus:ring focus:ring-[#ECE6C2] focus:ring-opacity-50 transition-all outline-none tracking-[0.3em] placeholder-opacity-20" style={{ borderColor: player.color, placeholder: player.color }}
              />
            </div>
          ))}
          <button
            type="submit"
            className=" absolute left-30 mt-6 bg-[#CC6B4A] tracking-[0.3em] text-[#1E1B1B] py-3 px-20 rounded-[40px] transition-all duration-200 font-semibold text-[22px]"
          >
            We're Ready!
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ThreeNameInput;
