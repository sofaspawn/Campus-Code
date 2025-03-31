import React, { useState } from "react";
import Quiz from "./components/mainPrompt";
import Star1 from "./assets/Star-1.png"
import Star2 from "./assets/Star-2.png"
import Footer from "./footer"
import burstBrown from "./assets/Burst-pucker-1.png"
import burstRed from "./assets/Burst-pucker-2.png"
import burstWhite from "./assets/Burst-pucker-3.png"
import burstBlue from "./assets/Burst-pucker-4.png"

function FourNameInput() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [players, setPlayers] = useState([
    { name: "", color: "#6F5643" }, // dark brown
    { name: "", color: "#CC6B49" }, // red
    { name: "", color: "#ECE6C2" }, // off white
    { name: "", color: "#73BDA8" }, // blue
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsGameStarted(true);
  };

  if (isGameStarted) {
    return <Quiz players={players} />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1E1B1B] text-[#ECE6C2]">
      <div>
        <h2 className="text-[70px] font-medium text-center absolute inset-x-0 top-20 h-20 text-[#D2A24C]" style={{fontFamily:'Adamina-Regular'}}>
          Player Setup
        </h2>

        <img src={Star1}
        className="absolute top-0 right-0"/>

        <img src={Star2}
        className="absolute bottom-0 left-0"/>

        <img src={burstWhite} 
        className="absolute top-100 left-116 w-22"/>
        
        <img src={burstBrown} 
        className="absolute top-57 left-116 w-22"/>

        <img src={burstRed} 
        className="absolute top-78 left-116 w-22"/>
        
        <img src={burstBlue} 
        className="absolute top-120 left-116 w-22"/>

        <form onSubmit={handleSubmit} className="space-y-8 absolute inset-x-125 top-60 h-30 tracking-[0.1em] text-[22px]" style={{fontFamily:'CENTAUR'}}>
          {players.map((player, index) => (
            <div key={index} className="flex items-center space-x-10">
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
                className="w-full px-35 py-2 rounded-[40px] border-2 focus:border-[#ECE6C2] focus:ring focus:ring-[#ECE6C2] focus:ring-opacity-50 transition-all outline-none tracking-[0.3em] placeholder-opacity-20" style={{ borderColor: player.color, placeholder: player.color }}
              />
            </div>
          ))}
          <button
            type="submit"
            className="absolute left-25 bg-[#D2A24C] tracking-[0.3em] text-[#1E1B1B] py-3 px-30 rounded-[30px] hover:from-[#D2A24C] hover:to-[#DC7B59] transition-all duration-200 font-semibold"
          >
            We're Ready!
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default FourNameInput;
